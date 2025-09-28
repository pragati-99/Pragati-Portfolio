import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import SummaryCards from './components/SummaryCards';
import ChartsSection from './components/ChartsSection';
import './index.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Topbar />
        <SummaryCards />
        <ChartsSection />
      </main>
    </div>
  );
}

export default App;
