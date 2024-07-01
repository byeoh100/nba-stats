import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function PlayerTable({ fetchedPData = null }) {
    const [playerData, setPlayerData] = useState(null)
    const [activeCat, setActiveCat] = useState([])

    const displayCat = {
        "GP": "Games played",
        "MIN": "Minutes",
        "FG": "Field goals",
        "FG%": "Field goal percent",
        "3P": "3 pointers/attempts",
        "3P%": "3 pointer percent",
        "FT": "Free throws/attempts",
        "FT%": "Free throw percent",
        "ORB": "Offensive rebounds",
        "DRB": "Defensive rebounds",
        "AST": "Assists",
        "BLK": "Blocks",
        "STL": "Steals",
        "PF": "Personal fouls",
        "TOV": "Turnovers",
        "PTS": "Points per game"
    }

    const dataPull = [
        "games",
        "minutes_played",
        "field_goals",
        "field_percent",
        "three_fg",
        "three_percent",
        "ft",
        "ft_percent",
        "ORB",
        "DRB",
        "AST",
        "BLK",
        "STL",
        "PF",
        "TOV",
        "PTS"
    ]

    const color = {
        backgroundColor : 'blue'
    }

    console.log(Object.keys(displayCat))

    useEffect(() => {
        if (fetchedPData != null) {
            setPlayerData(fetchedPData)
            setActiveCat([])
        }
    }, [fetchedPData])

    const handleActive = (cat) => {
        if (activeCat.includes(cat)) {
            setActiveCat(activeCat.filter((ele) => ele != cat))
        }
        else {
            setActiveCat([...activeCat, cat])
        }
    }

    const AbbrevTooltip = ({ id, children, title }) => (
        <OverlayTrigger delay={{ show: 100, hide: 200 }} overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <th
                onClick={() => (handleActive(id))}
                style={activeCat.includes(id) ? color : undefined}
            >{children}</th>
        </OverlayTrigger>
    )

    return (
        <div className="border rounded px-3 pt-3" id="statsTable">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Season</th>
                        {/* <AbbrevTooltip title="Games played" id="games">GP</AbbrevTooltip>
                        <th>MIN</th>
                        <AbbrevTooltip title="Field goals/attempts" id="field_goals">FG/FGA</AbbrevTooltip>
                        <th>FG%</th>
                        <AbbrevTooltip title="3 pointers/attempts" id="three_fg">3P/3PA</AbbrevTooltip>
                        <th>3P%</th>
                        <AbbrevTooltip title="Free throws/attempts" id="ft">FT/FTA</AbbrevTooltip>
                        <th>FT%</th>
                        <AbbrevTooltip title="Offensive rebounds" id="ORB">ORB</AbbrevTooltip>
                        <AbbrevTooltip title="Defensive rebounds" id="DRB">DRB</AbbrevTooltip>
                        <AbbrevTooltip title="Assists" id="AST">AST</AbbrevTooltip>
                        <AbbrevTooltip title="Blocks" id="BLK">BLK</AbbrevTooltip>
                        <AbbrevTooltip title="Steals" id="STL">STL</AbbrevTooltip>
                        <AbbrevTooltip title="Personal fouls" id="PF">PF</AbbrevTooltip>
                        <AbbrevTooltip title="Turnovers" id="TOV">TO</AbbrevTooltip>
                        <AbbrevTooltip title="Points per game" id="PTS">PPG</AbbrevTooltip> */}
                        {Object.keys(displayCat).map((key) => (
                            <AbbrevTooltip title={displayCat[key]} id={key}>{key}</AbbrevTooltip>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {playerData?.map((stat, index) => (
                        <tr key={index}>
                            <th>{stat?.season - 1}-{stat?.season - 2000}</th>
                            {/* <th>{stat?.games}</th>
                            <th>{(stat?.minutes_played / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.field_goals / stat?.games).toFixed(1)}/{(stat?.field_attempts / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.field_percent * 100).toFixed(1)}</th>
                            <th>{(stat?.three_fg / stat?.games).toFixed(1)}/{(stat?.three_attempts / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.three_percent * 100).toFixed(1)}</th>
                            <th>{(stat?.ft / stat?.games).toFixed(1)}/{(stat?.fta / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.ft_percent * 100).toFixed(1)}</th>
                            <th>{(stat?.ORB / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.DRB / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.AST / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.BLK / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.STL / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.PF / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.TOV / stat?.games).toFixed(1)}</th>
                            <th>{(stat?.PTS / stat?.games).toFixed(1)}</th> */}
                            {dataPull.map((cat) => {
                                if (cat == "field_percent" || cat == "three_percent" || cat == "ft_percent") {
                                    return <th>{(stat?.[cat] * 100).toFixed(1)}</th>
                                }
                                else if (cat == "games") {
                                    return <th>{stat?.[cat]}</th>
                                }
                                return <th>{(stat?.[cat] / stat?.games).toFixed(1)}</th>
                            })}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default PlayerTable