import React from 'react';
import '../Dashboard/dashboard.css';

function Dashboard({ userRole }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-welcome">Welcome, <span className="user-role">{userRole}</span>!</p>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Product Management</h3>
          <p>Manage your products, track inventory, and update prices.</p>
        </div>
        <div className="dashboard-card">
          <h3>Supplier Management</h3>
          <p>View supplier details, manage contracts, and track deliveries.</p>
        </div>
        <div className="dashboard-card">
          <h3>Alerts & Notifications</h3>
          <p>Stay updated with the latest alerts and system notifications.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
