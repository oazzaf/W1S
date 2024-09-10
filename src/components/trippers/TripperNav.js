import React, { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUser, faCompass } from '@fortawesome/free-regular-svg-icons';
import { faHome, faFlag } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const TripperNav = () => {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize navItems to prevent recreation on each render
  const navItems = useMemo(() => [
    { name: 'Home', icon: faHome, path: '/tripper/home' },
    { name: 'Explore', icon: faCompass, path: '/tripper/explore' },
    { name: 'Quest', icon: faFlag, path: '/tripper/quests' },
    { name: 'Chat', icon: faComments, path: '/tripper/messages' },
    { name: 'Profile', icon: faUser, path: '/tripper/profile' },
  ], []);

  // Sync selected state with the current URL path
  useEffect(() => {
    const currentItem = navItems.find(item => location.pathname.startsWith(item.path));
    if (currentItem) {
      setSelected(currentItem.name);
    } else {
      setSelected('');
    }
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
              <span className="ml-2 text-sm uppercase tracking-wide neon-text">Menu</span>
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
            <span className="absolute top-0 right-0 h-2 w-2 bg-gradient-to-r from-[#ff6a5c] via-[#ff6a5c] to-[#d93775] rounded-full"></span>
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
                selected === item.name ? 'text-[#bf3655]' : 'text-gray-500'
              }`}
            />
            <span
              className={`mt-1 text-xs ${
                selected === item.name
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a5c] via-[#ff6a5c] to-[#d93775]'
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

export default TripperNav;
