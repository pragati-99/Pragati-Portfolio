import BarLineCharts from "../Charts/BarLineCharts";
import PolarDoughnutCharts from "../Charts/PolarDoughnutCharts";
import ActiveUsersChart from "../Charts/ActiveUsersChart";
import TotalUsersChart from "../Charts/TotalUsersChart";

export default function ChartsSection() {
  return (
    <>
      
      <h4>- BarChart & LineChart</h4>
      <BarLineCharts />
      <h4>- PolarChart & DoughnutChart</h4>
      <PolarDoughnutCharts />

    </>
  );
}
