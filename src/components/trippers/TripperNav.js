import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComments, faUser, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const TripperNav = () => {
  const [selected, setSelected] = useState('Traveling');

  const navItems = [
    { name: 'Traveling', icon: faGlobe }, // No outlined equivalent, using solid
    { name: 'Explore', icon: faCompass },
    { name: 'Saved', icon: faBookmark },
    { name: 'Chat', icon: faComments },
    { name: 'Profile', icon: faUser },
  ];

  return (
    <nav className="bg-[#121212] py-10 relative">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Left Section (Menu) */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 neon-glow">
            <FontAwesomeIcon icon={faBars} size="lg" />
            <span className="ml-2 text-sm uppercase tracking-wide neon-text">Menu</span>
          </button>
        </div>

        {/* Center Section (Main Navigation) */}
        <div className="flex space-x-32 items-center relative">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelected(item.name)}
              className={`flex flex-col items-center relative ${
                selected === item.name
                  ? 'text-pink-500'
                  : 'text-gray-500'
              }`}
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="2x"
                className={`${
                  selected === item.name
                    ? 'text-pink-500'
                    : 'text-gray-500'
                }`}
              />
              <span
                className={`mt-1 text-sm ${
                  selected === item.name
                    ? 'text-pink-500'
                    : 'text-gray-500'
                }`}
              >
                {item.name}
              </span>
              {selected === item.name && (
                <div className="absolute bottom-[-41px] border-b-2 border-pink-500 w-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Right Section (Notification and Search) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 relative">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full"></span>
          </button>
          <button className="text-gray-500">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </div>

      {/* Centered Gray Border */}
      <div className="flex justify-center mt-10 relative">
        <div className="border-b border-gray-700 w-4/6"></div>
      </div>
    </nav>
  );
};

export default TripperNav;
