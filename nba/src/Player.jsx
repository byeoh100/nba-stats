import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import LineChart from './LineChart'
import './Player.css'
import PlayerTable from './PlayerTable';


function Player({ playerName }) {
    const [playerData, setPlayerData] = useState([])
    const [playerTeam, setPlayerTeam] = useState('')
    const [activeCat, setActiveCat] = useState([])
    const [hideChart, setHideChart] = useState(true)
    const [hideTable, setHideTable] = useState(false)
    const [formattedData, setFormattedData] = useState([])

    console.log(activeCat)

    const dataPull = {
        "season": "Season",
        "games": "GP",
        "minutes_played": "MIN",
        "field_goals": "FG",
        "field_attempts" : "FGA",
        "field_percent": "FG%",
        "three_fg": "3P",
        "three_attempts": "3PA",
        "three_percent": "3P%",
        "ft": "FT",
        "fta": "FTA",
        "ft_percent": "FT%",
        "ORB": "ORB",
        "DRB": "DRB",
        "AST": "AST",
        "BLK": "BLK",
        "STL": "STL",
        "PF": "PF",
        "TOV": "TOV",
        "PTS": "PPG"
    }

    useEffect(() => {
        const fetchData = async () => {
            let firstRes = await axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`)
            setPlayerData(firstRes.data.results)
            setPlayerTeam(firstRes.data.results[0].team)
            let formatData = firstRes.data.results.map((i) => {
                let newDict = {}
                Object.keys(dataPull).map((key) => {
                    newDict[dataPull[key]] = i[key]
                })
                return newDict
            })
            setFormattedData(formatData)
        }
        if (playerName) {
            setPlayerData(null)
            setFormattedData([])
            fetchData()
        }
    }, [playerName])

    return (
        <div>
            <h3 className="text-center">{playerName.toUpperCase()} / {playerTeam}</h3>
            <div className="stats">
                <button onClick={() => setHideTable(!hideTable)}>TABLE</button>
                {hideTable ? undefined : <PlayerTable fetchedPData={formattedData} setACat={setActiveCat} ACat={activeCat}/>}
                <button onClick={() => setHideChart(!hideChart)}>GRAPH</button>
                {hideChart ? undefined : <LineChart pData={formattedData} category={activeCat} />}
            </div>
        </div>
    )
}

export default Player