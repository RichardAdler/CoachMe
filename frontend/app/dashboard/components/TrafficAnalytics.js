"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler, CategoryScale } from 'chart.js';
import './TrafficAnalytics.css';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler, CategoryScale);

const TrafficAnalytics = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      label: 'Traffic',
      data: [14, 16, 12, 13, 14, 15, 16],
      fill: true,
      backgroundColor: 'rgba(255, 128, 171, 0.2)', // Light pink fill
      borderColor: '#ff80ab', // Pink border
      pointBackgroundColor: '#ffffff', // White point fill
      pointBorderColor: '#ff80ab', // Pink point border
      pointHoverBackgroundColor: '#ff80ab', // Pink point hover fill
      pointHoverBorderColor: '#ffffff', // White point hover border
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.4 // Smooth line
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.raw}pm`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 10,
        suggestedMax: 17,
        ticks: {
          callback: function(value) {
            return `${value}pm`;
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="traffic-analytics">
      <h2>Traffic analytics</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TrafficAnalytics;
