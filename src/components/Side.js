// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaBoxes, FaShoppingCart, FaUndo, FaUsers, FaTruck, FaStore, FaLink, FaCalculator, FaChartLine, FaUser } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li className='side1'><FaHome />Dashboard</li>
        <li><FaBoxes /> Inventory</li>
        <li><FaShoppingCart /> Order</li>
        <li><FaUndo /> Returns</li>
        <li><FaUsers /> Customers</li>
        <li><FaTruck /> Shipping</li>
        <li><FaStore /> Channel</li>
        <li><FaLink /> Integrations</li>
        <li><FaCalculator /> Calculators</li>
        <li><FaChartLine /> Reports</li>
        <li><FaUser /> Account</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
