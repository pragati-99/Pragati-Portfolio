import AllCharts from './AllCharts';
import Card from './Card';
import ChartCard from './ChartCard';
import ExtraCharts from './ExtraCharts';

const Dashboard = () => {
  return (
    <div className="main-content">
      <div className="cards-container">
        <Card title="Total Sales" value="$42,000" borderColor="#4CAF50" />
        <Card title="Orders" value="1,580" borderColor="#2196F3" />
        <Card title="Visitors" value="9,200" borderColor="#FFC107" />
        <Card title="Revenue" value="$13,300" borderColor="#E91E63" />
        <ChartCard />
        <ExtraCharts />
        <AllCharts/>
      </div>
    </div>
  );
};

export default Dashboard;
