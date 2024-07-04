import React from 'react'
import { useOutletContext } from 'react-router-dom'

function StatsCompare() {
    const { compare, setCompare } = useOutletContext()

    console.log(compare)

    return (
        <>
            <h1>COMPARE PLAYER STATS</h1>
            <button onClick={() => setCompare([])}>Clear player list</button>
            {compare.map((player, i) => (
                <h5 key={i}>{player}</h5>
        ))}
        </>
    )
}

export default StatsCompare