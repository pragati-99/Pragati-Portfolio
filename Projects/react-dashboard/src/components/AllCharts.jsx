import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';

import { Doughnut, PolarArea, Radar, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

const AllCharts = () => {
  const sizeStyle = { width: '400px', height: '400px' };

  const doughnutData = {
    labels: ['Desktop', 'Tablet', 'Mobile'],
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: ['#2196f3', '#4caf50', '#ffc107'],
      },
    ],
  };

  const polarData = {
    labels: ['Marketing', 'Sales', 'Support', 'Development'],
    datasets: [
      {
        data: [11, 16, 7, 14],
        backgroundColor: ['#03a9f4', '#e91e63', '#ffc107', '#9c27b0'],
      },
    ],
  };

  const radarData = {
    labels: ['UI', 'UX', 'Speed', 'Security', 'Features'],
    datasets: [
      {
        label: 'Product A',
        data: [65, 59, 90, 81, 56],
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: '#2196f3',
        pointBackgroundColor: '#2196f3',
      },
    ],
  };

  const horizontalBarData = {
    labels: ['Product 1', 'Product 2', 'Product 3'],
    datasets: [
      {
        label: 'Popularity',
        data: [85, 60, 75],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  const horizontalBarOptions = {
    responsive: false,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: { beginAtZero: true },
    },
  };

  return (
    <div className="cards-container">
      <div className="card">
        <h3>Doughnut Chart</h3>
        <div style={sizeStyle}>
          <Doughnut data={doughnutData} options={{ responsive: false }} />
        </div>
      </div>

      <div className="card">
        <h3>Polar Area Chart</h3>
        <div style={sizeStyle}>
          <PolarArea data={polarData} options={{ responsive: false }} />
        </div>
      </div>

      <div className="card">
        <h3>Radar Chart</h3>
        <div style={sizeStyle}>
          <Radar data={radarData} options={{ responsive: false }} />
        </div>
      </div>

      <div className="card">
        <h3>Horizontal Bar Chart</h3>
        <div style={sizeStyle}>
          <Bar data={horizontalBarData} options={horizontalBarOptions} />
        </div>
      </div>
    </div>
  );
};

export default AllCharts;
