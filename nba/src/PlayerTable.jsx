import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function PlayerTable({ fetchedPData = null, setACat, ACat }) {
    const [playerData, setPlayerData] = useState(null)
    const [cats, setCats] = useState([])

    const color = {
        backgroundColor: 'blue'
    }

    useEffect(() => {
        if (fetchedPData.length > 0) {
            setPlayerData(fetchedPData)
            setCats(Object.keys(fetchedPData[0]))
            setACat([])
        }
    }, [fetchedPData])

    const handleActive = (cat) => {
        if (ACat.includes(cat)) {
            setACat(ACat.filter((ele) => ele != cat))
        }
        else {
            setACat([...ACat, cat])
        }
    }

    const AbbrevTooltip = ({ id, children, title }) => (
        <OverlayTrigger delay={{ show: 100, hide: 200 }} overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <th
                onClick={() => (handleActive(id))}
                style={ACat.includes(id) ? color : undefined}
            >{children}</th>
        </OverlayTrigger>
    )

    return (
        <div className="border rounded px-3 pt-3" id="statsTable">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {playerData == null ? undefined : cats.map((stat) => (
                            <AbbrevTooltip title={stat} id={stat}>{stat}</AbbrevTooltip>
                        ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {playerData == null ? undefined : playerData.map((year, index) => (
                        <tr key={index}>
                            {cats.map((stat) => {
                                if (stat == "FG%" || stat == "3P%" || stat == "FT%") {
                                    return <th
                                        style={ACat.includes(stat) ? color : undefined}
                                    >{(year[stat] * 100).toFixed(1)}</th>
                                }
                                else if (stat == "GP" || stat == "Season") {
                                    return <th
                                        style={ACat.includes(stat) ? color : undefined}
                                    >{year[stat]}</th>
                                }
                                else {
                                    return <th
                                        style={ACat.includes(stat) ? color : undefined}
                                    >{(year[stat] / year.GP).toFixed(1)}</th>
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default PlayerTable