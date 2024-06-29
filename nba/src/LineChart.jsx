import React, { useState, useEffect } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

function LineChart({ pData, category }) {
    const [pLabel, setPLabel] = useState([])
    const [pDataset, setPDataset] = useState([])

    console.log(pData, category, pDataset)

    useEffect(() => {
        if (pData && category.length > 0) {
            setPLabel(pData.map((stat) => (stat.season)).reverse())
            let dataset1 = {
                label: "TEMP",
                data: pData.map((stat) => (stat.PTS / stat.games).toFixed(1)).reverse()
            }
            let dataCategory = category.map((cat) => ( // you need to push the obj to the array, not the new array
                {
                    label : cat,
                    data : pData.map((stat) => (stat[cat] / stat.games).toFixed(1)).reverse()
                }
            ))
            setPDataset(dataCategory)
            console.log(pDataset)
        }
        else {
            setPDataset([])
        }
    }, [pData, category])

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