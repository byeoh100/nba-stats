import React, { useState, useEffect } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

function LineChart({ pData = [], category, sw }) {
    const [pLabel, setPLabel] = useState([])
    const [pDataset, setPDataset] = useState([])

    console.log(pData.map((stat) => stat.Season))

    useEffect(() => {
        if (pData != null && category.length > 0) {
            setPLabel(pData.map((stat) => stat.Season).reverse())

            let updateActive = category.map((cat) => {
                let color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
                return {
                    label: cat,
                    data: pData.map((year) => (year[cat])).reverse(),
                    borderColor: color,
                    backgroundColor: color
                }
            })

            setPDataset(updateActive)
        }
        else {
            setPDataset([])
        }
    }, [pData, category, sw])

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

const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52)