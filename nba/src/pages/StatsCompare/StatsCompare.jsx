import React from 'react'
import { useOutletContext } from 'react-router-dom'
import PlayerTable from '../../components/PlayerTable'

function StatsCompare() {
    const { compare, setCompare } = useOutletContext()

    console.log(compare)

    return (
        <>
            <h1>COMPARE PLAYER STATS</h1>
            <button onClick={() => setCompare([])}>Clear player list</button>
            {compare.map((playerData, i) => (
                <PlayerTable fetchedPData={playerData} />
        ))}
        </>
    )
}

export default StatsCompare