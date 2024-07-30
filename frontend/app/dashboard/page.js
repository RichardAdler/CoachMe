import React from 'react';
import Sidebar from './components/Sidebar';
import HomeworkAnalytics from './components/HomeworkAnalytics';
import TrafficAnalytics from './components/TrafficAnalytics';
import ProgressStatistics from './components/ProgressStatistics';
import BestStudents from './components/BestStudents';
import StudentsByLocation from './components/StudentsByLocation';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <HomeworkAnalytics />
        <TrafficAnalytics />
        <ProgressStatistics />
        <BestStudents />
        <StudentsByLocation />
      </div>
    </div>
  );
};

export default Dashboard;
