import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css'; // Optional: Style the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>TELECOME</h2> {/* Replace with your app name */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">LOGIN</Link>
        </li>
        <li>
          <Link to="/dashboard">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/product-management">PRODUCT MANAGEMENT</Link>
        </li>
        <li>
          <Link to="/supplier-management">SUPPLIER MANAGEMENT</Link>
        </li>
        <li>
          <Link to="/alerts-notifications">NOTIFICATIONS</Link>
        </li>
      </ul>
      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
        />
        <button className="search-button" type="button">Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
