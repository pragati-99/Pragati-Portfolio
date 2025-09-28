import React from 'react';
import { FaTachometerAlt, FaBox, FaThList, FaUsers, FaWarehouse, FaChartBar, FaCog } from 'react-icons/fa'; // ✅ Add this

export default function Sidebar() {
  return (
    <div className="sidebar slide-in">
      <h2>SHOP</h2>
      <ul>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaBox /> Products</li>
        <li><FaThList /> Categories</li>
        <li><FaUsers /> Customers</li>
        <li><FaWarehouse /> Inventory</li>
        <li><FaChartBar /> Reports</li>
        <li><FaCog /> Setting</li>
      </ul>
    </div>
  );
}
