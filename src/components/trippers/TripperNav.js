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
    <nav className="bg-[#222222] py-10 relative">
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
                selected === item.name ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="2x"
                className={`${
                  selected === item.name ? 'text-[#bf3655]' : 'text-gray-500'
                }`}
              />
              <span
                className={`mt-1 text-sm ${
                  selected === item.name
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#ff6a5c] to-[#d93775]'
                    : 'text-gray-500'
                }`}
              >
                {item.name}
              </span>
              {selected === item.name && (
                <div className="absolute bottom-[-41.5px] w-full h-[2px] bg-gradient-to-r from-[#ff8a7a] via-[#ff6a5c] to-[#d93775] z-10"></div>
              )}
            </button>
          ))}
        </div>

        {/* Right Section (Notification and Search) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 relative">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-gradient-to-r from-[#ff6a5c] via-[#ff6a5c] to-[#d93775] rounded-full"></span>
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
