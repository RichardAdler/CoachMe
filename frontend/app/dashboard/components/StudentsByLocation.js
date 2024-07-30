// StudentsByLocation.js
import React from 'react';
import './StudentsByLocation.css';

const StudentsByLocation = () => {
  const data = [
    { location: 'USA', percentage: 40 },
    { location: 'Asia', percentage: 30 },
    { location: 'Europe', percentage: 20 },
    { location: 'Australia', percentage: 10 }
  ];

  return (
    <div className="students-by-location">
      <h2>Students by Location</h2>
      <div className="chart">
        {/* Dummy Pie Chart */}
        <div className="pie-chart">
          {data.map((item, index) => (
            <div
              key={index}
              className="pie-segment"
              style={{ '--percentage': item.percentage, '--offset': data.slice(0, index).reduce((sum, curr) => sum + curr.percentage, 0) }}
            >
              <span className="tooltip">{item.location} - {item.percentage}%</span>
            </div>
          ))}
        </div>
        <ul className="chart-legend">
          {data.map((item, index) => (
            <li key={index}>
              <span className="legend-color" style={{ '--legend-color': `var(--color-${index})` }}></span>
              {item.location} - {item.percentage}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentsByLocation;
