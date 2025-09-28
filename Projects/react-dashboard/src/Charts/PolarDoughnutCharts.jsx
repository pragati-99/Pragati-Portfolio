import { PolarArea, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend);

export default function PolarDoughnutCharts() {
  const polarData = {
    labels: ['Low Alerts', 'Medium Alerts', 'High Alerts'],
    datasets: [
      {
        data: [4, 7, 10],
        backgroundColor: ['#ffeb3b', '#9e9e9e', '#616161'],
      },
    ],
  };

  const doughnutData = {
    labels: ['Electronics', 'Clothing', 'Groceries'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#673ab7', '#ffc107', '#f8bbd0'],
      },
    ],
  };

  const style = { width: '500px', height: '300px' };

  return (
    <div className="charts-row">
      <div className="chart" style={style}><PolarArea data={polarData} /></div>
      <div className="chart" style={style}><Doughnut data={doughnutData} /></div>
    </div>
  );
}
