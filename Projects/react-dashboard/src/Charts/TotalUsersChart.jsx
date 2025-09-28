import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const TotalUsersChart = () => {
  const data = {
    labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    datasets: [
      {
        label: 'Users',
        data: [50, 40, 100, 30, 300, 50, 120],
        borderColor: '#00FF7F',
        backgroundColor: '#00FF7F',
        tension: 0.4,
        fill: false,
        pointBackgroundColor: ['orange', 'yellow', 'green', 'cyan', 'blue', 'purple', 'white']
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#ccc' },
        grid: { color: '#333' }
      },
      x: {
        ticks: { color: '#ccc' },
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index' }
    }
  };

  return (
    <div className="card">
      <h3>97.4K</h3>
      <p>Total Users</p>
      <Line data={data} options={options} />
      <p style={{ color: 'lime' }}>12.5% from last month</p>
    </div>
  );
};

export default TotalUsersChart;
