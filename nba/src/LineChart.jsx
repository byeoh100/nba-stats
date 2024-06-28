import React, { useState, useEffect } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

function LineChart({ pData, category }) {
    const [pLabel, setPLabel] = useState([])
    const [pDataset, setPDataset] = useState([])

    console.log(pDataset)

    useEffect(() => {
        if (pData) {
            setPDataset([])
            console.log(pData)
            setPLabel(pData.map((stat) => (stat.season)).reverse())
            let dataset = {
                label: "TEMP",
                data: pData.map((stat) => (stat.PTS / stat.games).toFixed(1)).reverse()
            }
            setPDataset([dataset])
        }
    }, [pData])

    return (
        <Line
            data={{
                labels: pLabel,
                datasets: [...pDataset],
            }}
            options={{
                scales: {
                    y: {
                        min: 0,
                    },
                },
            }}
        />
    );
}
export default LineChart;