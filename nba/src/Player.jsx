import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Player({ playerName }) {
    const [playerData, setPlayerData] = useState([])
    const [playerTeam, setPlayerTeam] = useState('')

    useEffect(() => {
        setPlayerData(null)
        const fetchData = async () => {
            let firstRes = await axios.get(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${playerName}`)
            setPlayerData(firstRes.data.results)
            setPlayerTeam(firstRes.data.results[0].team)
            console.log(playerData)
        }
        fetchData()
    }, [playerName])

    const Link = ({ id, children, title }) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <a href="#">{children}</a>
        </OverlayTrigger>
    )

    console.log(playerData)

    return (
        <div>
            <h3 className="text-center">{playerName.toUpperCase()} / {playerTeam}</h3>
            <div className="border rounded px-3 pt-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Season</th>
                            <th><Link title="Games played" id="t-1">GP</Link></th>
                            <th><Link title="Points per game" id="t-1">PPG</Link></th>
                            <th><Link title="Field goals/Field goal attempts" id="t-1">FG/FGA</Link></th>
                            <th>FG%</th>
                            <th>3P/3PA</th>
                            <th>3P%</th>
                            <th>FT/FTA</th>
                            <th>FT%</th>
                            <th>ORB</th>
                            <th>DRB</th>
                            <th>REB</th>
                            <th>AST</th>
                            <th>BLK</th>
                            <th>STL</th>
                            <th>PF</th>
                            <th>TO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerData?.map((stat, index) => (
                            <tr key={index}>
                                <th>{stat?.season - 1}-{stat?.season - 2000}</th>
                                <th>{stat?.games}</th>
                                <th>{(stat?.PTS / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.field_goals / stat?.games).toFixed(1)}/{(stat?.field_attempts / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.field_percent * 100).toFixed(1)}</th>
                                <th>{(stat?.three_fg / stat?.games).toFixed(1)}/{(stat?.three_attempts / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.three_percent * 100).toFixed(1)}</th>
                                <th>{(stat?.ft / stat?.games).toFixed(1)}/{(stat?.fta / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.ft_percent * 100).toFixed(1)}</th>
                                <th>{(stat?.ORB / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.DRB / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.AST / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.AST / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.BLK / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.STL / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.PF / stat?.games).toFixed(1)}</th>
                                <th>{(stat?.TOV / stat?.games).toFixed(1)}</th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Player