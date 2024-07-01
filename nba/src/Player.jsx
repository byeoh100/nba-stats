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
    const [graphData, setGraphData] = useState([])
    const [graphSwitch, setGraphSwitch] = useState(false)
    const [hideChart, setHideChart] = useState(true)
    const [hideTable, setHideTable] = useState(false)
    const [formattedData, setFormattedData] = useState([])

    console.log(formattedData)

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
                console.log(newDict)
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
                {hideTable ? undefined : <PlayerTable fetchedPData={playerData} />}
                {/* <div className="border rounded px-3 pt-3" id="statsTable">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Season</th>
                                <AbbrevTooltip title="Games played" id="games">GP</AbbrevTooltip>
                                <th>MIN</th>
                                <AbbrevTooltip title="Field goals/attempts" id="field_goals">FG/FGA</AbbrevTooltip>
                                <th>FG%</th>
                                <AbbrevTooltip title="3 pointers/attempts" id="three_fg">3P/3PA</AbbrevTooltip>
                                <th>3P%</th>
                                <AbbrevTooltip title="Free throws/attempts" id="ft">FT/FTA</AbbrevTooltip>
                                <th>FT%</th>
                                <AbbrevTooltip title="Offensive rebounds" id="ORB">ORB</AbbrevTooltip>
                                <AbbrevTooltip title="Defensive rebounds" id="DRB">DRB</AbbrevTooltip>
                                <AbbrevTooltip title="Rebounds" id="REB">REB</AbbrevTooltip>
                                <AbbrevTooltip title="Assists" id="AST">AST</AbbrevTooltip>
                                <AbbrevTooltip title="Blocks" id="BLK">BLK</AbbrevTooltip>
                                <AbbrevTooltip title="Steals" id="STL">STL</AbbrevTooltip>
                                <AbbrevTooltip title="Personal fouls" id="PF">PF</AbbrevTooltip>
                                <AbbrevTooltip title="Turnovers" id="TOV">TO</AbbrevTooltip>
                                <AbbrevTooltip title="Points per game" id="PTS">PPG</AbbrevTooltip>
                            </tr>
                        </thead>
                        <tbody>
                            {playerData?.map((stat, index) => (
                                <tr key={index}>
                                    <th>{stat?.season - 1}-{stat?.season - 2000}</th>
                                    <th>{stat?.games}</th>
                                    <th>{(stat?.minutes_played / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.field_goals / stat?.games).toFixed(1)}/{(stat?.field_attempts / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.field_percent * 100).toFixed(1)}</th>
                                    <th>{(stat?.three_fg / stat?.games).toFixed(1)}/{(stat?.three_attempts / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.three_percent * 100).toFixed(1)}</th>
                                    <th>{(stat?.ft / stat?.games).toFixed(1)}/{(stat?.fta / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.ft_percent * 100).toFixed(1)}</th>
                                    <th>{(stat?.ORB / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.DRB / stat?.games).toFixed(1)}</th>
                                    <th>{((stat?.ORB + stat?.DRB) / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.AST / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.BLK / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.STL / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.PF / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.TOV / stat?.games).toFixed(1)}</th>
                                    <th>{(stat?.PTS / stat?.games).toFixed(1)}</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div> */}
                <button onClick={() => setHideChart(!hideChart)}>GRAPH</button>
                {hideChart ? undefined : <LineChart pData={playerData} category={graphData} sw={graphSwitch} />}
            </div>
        </div>
    )
}

export default Player