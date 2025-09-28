import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, LineElement);

const labels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

export default function BarLineCharts() {
  const barData = {
    labels,
    datasets: [
      {
        label: 'Products',
        data: [2000, 3500, 9800, 2700, 4600, 4000, 4500],
        backgroundColor: '#ffc107',
      },
      {
        label: 'Categories',
        data: [1500, 2500, 2200, 2000, 3000, 2400, 3100],
        backgroundColor: '#4caf50',
      }
    ]
  };

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Customers',
        data: [2000, 4000, 10000, 3000, 6000, 5000, 5500],
        borderColor: '#03a9f4',
        fill: false,
      },
      {
        label: 'Alerts',
        data: [2200, 2900, 2600, 2700, 3000, 3200, 3800],
        borderColor: '#f44336',
        fill: false,
      }
    ]
  };

  const style = { width: '500px', height: '250px' };

  return (
    <div className="charts-row">
      <div className="chart" style={style}><Bar data={barData} /></div>
      <div className="chart" style={style}><Line data={lineData} /></div>
    </div>
  );
}
