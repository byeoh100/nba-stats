import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Player.css'
import PlayerTable from '../../components/PlayerTable';
import { useOutletContext } from 'react-router-dom';
import Form from 'react-bootstrap/Form'


function Player({ playerName }) {
    const [playerData, setPlayerData] = useState([])
    const [averageData, setAverageData] = useState([])
    const [passAverage, setPassAverage] = useState(true)
    const [playerTeam, setPlayerTeam] = useState('')

    const { compare, setCompare } = useOutletContext()

    const dataPull = {
        "season": "Season",
        "games": "GP",
        "minutes_played": "MIN",
        "field_goals": "FG",
        "field_attempts": "FGA",
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
        "PTS": "PTS"
    }

    useEffect(() => {
        const fetchData = async () => {
            let firstRes = await axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`)
            setPlayerTeam(firstRes.data.results[0].team)
            let formatData = firstRes.data.results.map((i) => {
                let newDict = {}
                Object.keys(dataPull).map((key) => {
                    if (key == "field_percent" || key == "three_percent" || key == "ft_percent") {
                        newDict[dataPull[key]] = (i[key] * 100).toFixed(1)
                    }
                    else {
                        newDict[dataPull[key]] = i[key]
                    }
                })
                return newDict
            })
            setPlayerData(formatData)

            let createAverageData = formatData.map((i) => {
                let newDict = {}
                Object.keys(i).map((key) => {
                    if (key != "Season" && key !=  "GP" && key.includes("%") == false) {
                        newDict[key] = (i[key] / i.GP).toFixed(1)
                    }
                    else {
                        newDict[key] = i[key]
                    }
                })
                return newDict
            })
            setAverageData(createAverageData)
        }
        if (playerName) {
            setPlayerData([])
            fetchData()
        }
    }, [playerName])

    const addToCompare = () => {
        if (compare.includes(playerData)) {
            setCompare(compare.filter((p) => p != playerData))
        }
        else {
            setCompare([...compare, playerData])
        }
    }

    return (
        <div>
            <h3 className="text-center">{playerName.toUpperCase()} / {playerTeam}</h3>
            <button onClick={addToCompare}>{compare.includes(playerName) ? "Remove from compare" : "Add to compare"}</button>
            <Form>
                <Form.Check
                    type="switch"
                    id="averages"
                    label="Show totals"
                    onChange={() => setPassAverage(!passAverage)}
                />
            </Form>
            <div className="stats">
                <PlayerTable fetchedPData={passAverage ? averageData : playerData} />
            </div>
        </div>
    )
}

export default Player