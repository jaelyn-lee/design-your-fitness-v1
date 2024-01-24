import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
ChartJS.register(PointElement)

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend)

interface WeightChartProps {
  userWeight: number
  targetWeight: number
}

const WeightChart: React.FC<WeightChartProps> = ({
  userWeight,
  targetWeight,
}) => {
  const labels = [
    'Week 1',
    'Week 2',
    'Week 3',
    'Week 4',
    'Week 5',
    'Week 6',
    'Week 7',
  ] // Adjust as needed

  const data = {
    labels,
    datasets: [
      {
        label: 'User Weight',
        data: labels.map(() => userWeight), // Populate with user weight data
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Target Weight',
        data: labels.map(() => targetWeight), // Populate with target weight data
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Weight Tracking Chart',
      },
    },
  }

  return <Line options={options} data={data} />
}

export default WeightChart
