// app/home/components/Card.js
import React from 'react';

const Card = ({ image, name, title, reviews, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-[500px] m-4">
        <img src={image} alt={name} className="w-full h-80 object-cover rounded-lg" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-start">{name}</h3>
          <p className="text-gray-600 mb-2 text-start">{title}</p>
          <p className="text-yellow-500 mb-2 text-start">{reviews}</p>
          <p className="text-gray-800 text-justify">{description}</p>
        </div>
      </div>
    );
  };

export default Card;
