// ProgressStatistics.js
import React from 'react';
import './ProgressStatistics.css';

const ProgressStatistics = () => {
  const data = [
    { group: 'Group 1', percentage: 68, students: 15 },
    { group: 'Group 2', percentage: 44, students: 11 },
    { group: 'Group 3', percentage: 95, students: 10 },
    { group: 'Group 4', percentage: 57, students: 14 },
    { group: 'Group 5', percentage: 40, students: 17 }
  ];

  return (
    <div className="progress-statistics">
      <h2>Progress Statistics</h2>
      <div className="chart">
        {data.map((item, index) => (
          <div key={index} className="bar-container">
            <div className="bar" style={{ height: `${item.percentage}%` }}>
              <span>{item.percentage}%</span>
            </div>
            <div className="bar-label">
              <span>{item.group}</span>
              <span>Number of students: {item.students}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStatistics;
