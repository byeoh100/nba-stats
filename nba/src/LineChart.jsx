import React, { useState, useEffect } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

function LineChart({ pData = [], category = "", sw }) {
    const [pLabel, setPLabel] = useState([])
    const [pDataset, setPDataset] = useState([])
    const [activeCat, setActiveCat] = useState({})

    // console.log(activeCat, pDataset)

    useEffect(() => {
        if (pData != null && category.length > 0) {
            setPLabel(pData.map((stat) => (stat.season)).reverse())
            let color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`

            let newCat = {
                label: category,
                data: pData.map((stat) => (stat[category] / stat.games).toFixed(1)).reverse(),
                borderColor: color,
                backgroundColor: color
            }
            setPDataset([...pDataset, newCat])
            if (category in activeCat) {
                setPDataset(pDataset.filter((stat) => (stat.label != category)))
                delete activeCat[category]
            }
            else {
                let newActiveCat = {}
                newActiveCat[category] = pDataset.length

                setActiveCat({
                    ...activeCat,
                    ...newActiveCat
                })
            }
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