import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

function LineChart() {
  return (
    <Line data={{
        labels: ["A", "B"],
        datasets: [
            {
                label: "Revenue",
                data: [200, 300, 400],
            },
        ],
    }}/>
  );
}
export default LineChart;