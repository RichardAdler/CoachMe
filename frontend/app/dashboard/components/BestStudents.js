// BestStudents.js
import React from 'react';
import './BestStudents.css';

const BestStudents = () => {
  const students = [
    { name: 'Emily Smith', group: 1 },
    { name: 'Olivia Johnson', group: 2 },
    { name: 'Noah Smith', group: 3 },
    { name: 'Ava Martin', group: 4 },
    { name: 'James Anderson', group: 5 }
  ];

  return (
    <div className="best-students">
      <h2>Best Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <div className="student-avatar">
              <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt={`${student.name}'s avatar`} />
            </div>
            <div className="student-info">
              <span className="student-name">{student.name}</span>
              <span className="student-group">Group {student.group}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestStudents;
