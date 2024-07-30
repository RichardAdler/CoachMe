"use client";

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './HomeworkAnalytics.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const HomeworkAnalytics = () => {
  const data = {
    labels: ['Completed homework', 'Awaiting edits', 'Unfinished homework'],
    datasets: [{
      data: [61, 23, 16],
      backgroundColor: ['#ff80ab', '#ba68c8', '#6a1b9a'],
      borderColor: ['#ff80ab', '#ba68c8', '#6a1b9a'],
      borderWidth: 0,
      cutout: '70%',
      borderRadius: 10,
      offset: 5 // Apply a slight offset to each segment
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false // Hide the legend in the chart itself
      }
    },
    maintainAspectRatio: false,
    rotation: -90, // Start at the top
    circumference: 360, // Full circle
    elements: {
      arc: {
        borderRadius: 50,
        borderWidth: 0,
        spacing: -10 // Negative spacing to blend segments
      }
    },
  };

  return (
    <div className="homework-analytics poppins">
      <h2 className="poppins-semibold">Homework analytics</h2>
      <div className="chart-legend-container">
        <div className="chart-container">
          <Doughnut data={data} options={options} />
        </div>
        <ul className="chart-legend">
          <li>
            <span className="legend-color completed"></span>
            Completed homework <span className="poppins-medium">61%</span>
          </li>
          <li>
            <span className="legend-color awaiting"></span>
            Awaiting edits <span className="poppins-medium">23%</span>
          </li>
          <li>
            <span className="legend-color unfinished"></span>
            Unfinished homework <span className="poppins-medium">16%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeworkAnalytics;
