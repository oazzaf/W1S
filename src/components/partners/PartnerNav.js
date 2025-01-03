import React, { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Use Solid only for icons that don't have a free regular version
import { faBars, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

// Use free-regular for outlined icons (where available)
import {
  faBell,
  faChartBar,     // Dashboard (regular/outlined) // Booking  (regular/outlined)
  faComments,      // Messages (regular/outlined)
  faUser,          // Profile  (regular/outlined)
  faFlag       // Quest (free-regular placeholder; you can pick another icon)
} from '@fortawesome/free-regular-svg-icons';

import { useNavigate, useLocation } from 'react-router-dom';

const PartnerNav = () => {
  // Default selection is set to "Dashboard"
  const [selected, setSelected] = useState('Dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize navItems to prevent recreation on each render
  const navItems = useMemo(
    () => [
      { name: 'Explore', icon: faHome, path: '/partner/explore' },
      { name: 'Dashboard', icon: faChartBar, path: '/partner/dash' },
      { name: 'Quest', icon: faFlag, path: '/partner/quest' },
      { name: 'Messages', icon: faComments, path: '/partner/messages' },
      { name: 'Profile', icon: faUser, path: '/partner/profile' },
      
    ],
    []
  );

  // Update selection based on current path, but keep 'Dashboard' as default if no match
  useEffect(() => {
    const currentItem = navItems.find((item) =>
      location.pathname.startsWith(item.path)
    );
    if (currentItem) {
      setSelected(currentItem.name);
    }
    // No "else": default remains "Dashboard"
  }, [location.pathname, navItems]);

  const handleNavClick = (name, path) => {
    setSelected(name);
    navigate(path);
  };

  return (
    <>
      {/* Desktop Navigation Bar */}
      <nav className="bg-[#222222] px-9 py-9 sticky top-0 left-0 w-full z-50 hidden xl:block">
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Left Section (Menu) */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 neon-glow">
              <FontAwesomeIcon icon={faBars} size="lg" />
              <span className="ml-2 text-sm uppercase tracking-wide neon-text">
                Menu
              </span>
            </button>
          </div>

          {/* Center Section (Main Navigation) */}
          <div className="flex space-x-32 items-center relative">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name, item.path)}
                className={`flex flex-col items-center relative ${
                  selected === item.name ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  className={`${
                    selected === item.name ? 'text-[#a158ef]' : 'text-gray-500'
                  }`}
                />
                <span
                  className={`mt-1 text-sm ${
                    selected === item.name
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                      : 'text-gray-500'
                  }`}
                >
                  {item.name}
                </span>
                {selected === item.name && (
                  <div className="absolute bottom-[-41.5px] w-full h-[2px] bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4] z-10"></div>
                )}
              </button>
            ))}
          </div>

          {/* Right Section (Notification and Search) */}
          <div className="flex items-center space-x-4">
            {/* If you want a regular outlined bell, use faBell from free-regular */}
            <button className="text-gray-500 relative">
              <FontAwesomeIcon icon={faBell} size="lg" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]"></span>
            </button>
            {/* Search (no free-regular version for faSearch) */}
            <button className="text-gray-500">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
        </div>

        {/* Centered Gray Border */}
        <div className="flex justify-center mt-10 relative">
          <div className="border-b border-gray-700 w-full"></div>
        </div>
      </nav>

      {/* Mobile Top Navigation Bar (Menu, Notification, Search) */}
      <nav className="bg-[#222222] fixed top-0 left-0 w-full flex justify-between items-center py-5 px-4 xl:hidden z-50">
        {/* Left Section (Menu) */}
        <button className="text-gray-500">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        {/* Right Section (Notifications & Search) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 relative">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]"></span>
          </button>
          <button className="text-gray-500">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar (Main Navigation) */}
      <nav className="bg-[#222222] fixed bottom-0 left-0 w-full flex justify-around items-center py-5 px-1 xl:hidden z-50">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.name, item.path)}
            className={`flex flex-col items-center ${
              selected === item.name ? 'text-white' : 'text-gray-500'
            }`}
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="lg"
              className={`${
                selected === item.name ? 'text-[#a158ef]' : 'text-gray-500'
              }`}
            />
            <span
              className={`mt-1 text-xs ${
                selected === item.name
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                  : 'text-gray-500'
              }`}
            >
              {item.name}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default PartnerNav;