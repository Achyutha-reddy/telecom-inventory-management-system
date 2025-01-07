import React from 'react';
import '../AlertsNotifications/alertsnotification.css';

function AlertsNotifications() {
  return (
    <div className="alerts-container">
      <div className="alerts-header">
        <h1 className="alerts-title">Alerts & Notifications</h1>
        <p className="alerts-subtitle">View and manage your alerts and notifications.</p>
      </div>
      <div className="alerts-content">
        <div className="alert-card">
          <h2 className="alert-title">New Message</h2>
          <p className="alert-description">You have a new message from your team.</p>
        </div>
        <div className="alert-card">
          <h2 className="alert-title">System Update</h2>
          <p className="alert-description">Your system has been updated successfully.</p>
        </div>
        <div className="alert-card">
          <h2 className="alert-title">Security Alert</h2>
          <p className="alert-description">Your account security settings have been changed.</p>
        </div>
      </div>
    </div>
  );
}

export default AlertsNotifications;
