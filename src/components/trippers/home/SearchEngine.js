import React from 'react';
import { FiMap, FiTrendingUp, FiMoon, FiActivity, FiSun } from 'react-icons/fi';  // Importing Feather Icons

// Import images
import NatureImage from './actimg/Nature.jpg';
import AdventuresImage from './actimg/Adventures.png';
import NightLifeImage from './actimg/NightLife.jpg';
import WildImage from './actimg/Wild.jpg';
import BayImage from './actimg/Bay.jpeg';

const Activities = () => {
  const activities = [
    { 
      title: "Nature's Wonders", 
      spots: 450, 
      icon: <FiMap size={48} />,  // Nature Icon
      image: NatureImage, 
      colSpan: 'col-span-2', 
      rowSpan: 'row-span-2' 
    }, // Big card
    { 
      title: 'Trending', 
      spots: 257, 
      icon: <FiTrendingUp size={48} />,  // Trending Icon
      image: AdventuresImage, 
      colSpan: 'col-span-1', 
      rowSpan: 'row-span-1' 
    },  // Medium card
    { 
      title: 'Night Life', 
      spots: 357, 
      icon: <FiMoon size={48} />,  // Nightlife Icon
      image: NightLifeImage, 
      colSpan: 'col-span-1', 
      rowSpan: 'row-span-1' 
    },  // Medium card
    { 
      title: 'Wild Escapes', 
      spots: 117, 
      icon: <FiActivity size={48} />,  // Wild Escapes Icon
      image: WildImage, 
      colSpan: 'col-span-2', 
      rowSpan: 'row-span-1' 
    },  // Wide card
    { 
      title: 'Bay Shores', 
      spots: 147, 
      icon: <FiSun size={48} />,  // Bay Shores Icon
      image: BayImage, 
      colSpan: 'col-span-2', 
      rowSpan: 'row-span-2' 
    }, // Big card
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-white mb-2">Activities</h2>
      {/* Create the grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 gap-6 w-full p-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`${activity.colSpan} ${activity.rowSpan} relative rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300`}
            style={{ backgroundImage: `url(${activity.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-85"></div>
            
            {/* Card content */}
            <div className="relative z-10 p-6 text-white flex flex-col justify-between items-start h-full">
              {activity.icon}
              <div className="mt-auto">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-sm">{activity.spots} spots</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
