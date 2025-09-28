import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
ChartJS.register(ArcElement, Tooltip);

const ActiveUsersChart = () => {
  const data = {
    datasets: [{
      data: [68, 100 - 68],
      backgroundColor: ['#FFB703', '#1A1A2E'],
      borderWidth: 0,
      cutout: '70%',
    }]
  };

  const options = {
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: { enabled: false },
    }
  };

  return (
    <div className="card">
      <h3>42.5K</h3>
      <p>Active Users</p>
      <div style={{ position: 'relative', width: '150px', margin: 'auto' }}>
        <Doughnut data={data} options={options} />
        <div className="center-text">68%</div>
      </div>
      <p>24K users increased from last month</p>
    </div>
  );
};

export default ActiveUsersChart;
