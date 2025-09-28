import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartCard = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Visitors',
        data: [300, 450, 200, 600, 750],
        backgroundColor: 'transparent',
        borderColor: '#4CAF50',
        pointBorderColor: '#4CAF50',
      },
    ],
  };

  const options = {
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="card">
      <h3>Weekly Visitors</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartCard;
