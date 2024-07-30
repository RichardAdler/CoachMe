import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <img src="/Icons/dashboard-icon.png" alt="Dashboard" />
      </div>
      <div className="sidebar-icon">
        <img src="/path/to/calendar-icon.png" alt="Calendar" />
      </div>
      <div className="sidebar-icon">
        <img src="/path/to/schedule-icon.png" alt="Schedule" />
      </div>
      <div className="sidebar-icon">
        <img src="/path/to/analytics-icon.png" alt="Analytics" />
      </div>
      <div className="sidebar-icon">
        <img src="/path/to/settings-icon.png" alt="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
