import { FaBell, FaEnvelope, FaUser } from 'react-icons/fa'; // ✅ Add this

export default function Topbar({ toggleTheme }) {
  return (
    <div className="topbar">
      <h3>DASHBOARD</h3>
      <div className="icons">
        <button onClick={toggleTheme} className="theme-toggle">🌓</button>
        <FaBell />
        <FaEnvelope />
        <FaUser />
      </div>
    </div>
  );
}
