import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ExtraCharts = () => {
  const pieData = {
    labels: ['Electronics', 'Clothing', 'Home'],
    datasets: [
      {
        label: 'Categories',
        data: [40, 30, 30],
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [5000, 10000, 7500, 11000, 13000],
        backgroundColor: '#3f51b5',
      },
    ],
  };

  return (
    <>
      <div className="card">
  <h3>Product Categories</h3>
  <div style={{ width: '100%', height: '200px' }}>
    <Pie data={pieData} />
  </div>
</div>

      <div className="card">
  <h3>Monthly Revenue</h3>
  <div style={{ width: '100%', height: '200px' }}>
    <Bar data={barData} />
  </div>
</div>

    </>
  );
};

export default ExtraCharts;
