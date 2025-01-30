import React, { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faSearch,
  faHome,
  faFlag,
  faPlus,
  faCamera,
  faVideo,
  faMapMarkerAlt,
  faPlayCircle,
  faPaperclip,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { faComments, faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const TripperNav = () => {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // ===== New Post States =====
  const [postText, setPostText] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [isPostingModalOpen, setIsPostingModalOpen] = useState(false);

  // Handle selection of media type
  const handleMediaTypeSelect = (type) => {
    // If user clicks same type again, reset to ''
    setMediaType((prev) => (prev === type ? '' : type));
  };

  // Handle "Create Post" button
  const openPostModal = () => setIsPostingModalOpen(true);
  const closePostModal = () => setIsPostingModalOpen(false);

  // Handle final post submission
  const handlePostSubmit = () => {
    if (!postText.trim()) return;
    console.log('New Post => ', {
      text: postText,
      mediaType,
    });
    // Reset form
    setPostText('');
    setMediaType('');
    setIsPostingModalOpen(false);
  };
  // ===========================

  // Primary nav items (excluding the "post" button)
  const navItems = useMemo(
    () => [
      { name: 'Home', icon: faHome, path: '/tripper/home' },
      { name: 'Quest', icon: faFlag, path: '/tripper/quests' },
      { name: 'Chat', icon: faComments, path: '/tripper/messages' },
      { name: 'Profile', icon: faUser, path: '/tripper/profile' },
    ],
    []
  );

  // Sync selected state with the current URL path
  useEffect(() => {
    const currentItem = navItems.find((item) =>
      location.pathname.startsWith(item.path)
    );
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
      {/* ====================== Desktop Navigation Bar ====================== */}
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
          <div className="flex space-x-8 items-center relative">
            {/* Home & Quest */}
            {navItems.slice(0, 2).map((item) => (
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
                    selected === item.name
                      ? 'text-[#bf3655]'
                      : 'text-gray-500'
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

            {/* ===== The Futuristic Post Button ===== */}
            <button
              onClick={openPostModal}
              title="Create a Post"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#ff009a] to-[#fc6767] text-white text-2xl 
                         shadow-md hover:shadow-lg hover:scale-105 transition-transform border-2 border-transparent"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>

            {/* Chat & Profile */}
            {navItems.slice(2).map((item) => (
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
                    selected === item.name
                      ? 'text-[#bf3655]'
                      : 'text-gray-500'
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
        </div>

        {/* Centered Gray Border */}
        <div className="flex justify-center mt-10 relative">
          <div className="border-b border-gray-700 w-full"></div>
        </div>
      </nav>

      {/* =============== Mobile Top Navigation Bar =============== */}
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

      {/* =========== Mobile Bottom Navigation Bar (Main) =========== */}
      <nav className="bg-[#222222] fixed bottom-0 left-0 w-full flex justify-around items-center py-5 px-1 xl:hidden z-50">
        {/* Home */}
        {navItems.slice(0, 1).map((item) => (
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

        {/* Quest */}
        {navItems.slice(1, 2).map((item) => (
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

        {/* Futuristic Post Button (Mobile) */}
        <button
          onClick={openPostModal}
          title="Create a Post"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#ff009a] to-[#fc6767] 
                     text-white text-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform border-2 border-transparent"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>

        {/* Chat */}
        {navItems.slice(2, 3).map((item) => (
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

        {/* Profile */}
        {navItems.slice(3).map((item) => (
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

      {/* ===================== CREATE POST MODAL ===================== */}
      {isPostingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark Overlay - click to close */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={closePostModal}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-xl mx-auto bg-[#141414] rounded-xl shadow-2xl p-6">
            {/* Posting Tool */}
            <div className="relative bg-[#1f1f1f]/90 backdrop-blur-md rounded-lg p-4 border border-gray-800 shadow-inner">
              <h3 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Create a Post
              </h3>

              {/* Text area with glitchy placeholder animation */}
              <div className="relative">
                <textarea
                  className="w-full h-28 md:h-32 bg-[#262626] text-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 placeholder-gray-500 tracking-wide"
                  placeholder="Speak your mind... or your code."
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />
                {/* Glitch effect overlay for the placeholder area */}
                <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="w-1/2 h-full bg-gradient-to-r from-cyan-500 to-purple-500 mix-blend-overlay opacity-0 animate-glitch" />
                </div>
              </div>

              {/* Media Type Selector */}
              <div className="mt-4 flex items-center space-x-4">
                {/* Photo */}
                <button
                  onClick={() => handleMediaTypeSelect('photo')}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700 
                    ${
                      mediaType === 'photo'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    } 
                    hover:bg-cyan-500 hover:text-white group`}
                  title="Photo"
                >
                  <FontAwesomeIcon icon={faCamera} className="w-4 h-4" />
                  {/* Glow ring on active */}
                  {mediaType === 'photo' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-cyan-300 animate-ping" />
                  )}
                </button>

                {/* Video */}
                <button
                  onClick={() => handleMediaTypeSelect('video')}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700 
                    ${
                      mediaType === 'video'
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }
                    hover:bg-pink-500 hover:text-white group`}
                  title="Video"
                >
                  <FontAwesomeIcon icon={faVideo} className="w-4 h-4" />
                  {mediaType === 'video' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-pink-300 animate-ping" />
                  )}
                </button>

                {/* Location */}
                <button
                  onClick={() => handleMediaTypeSelect('location')}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700
                    ${
                      mediaType === 'location'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }
                    hover:bg-purple-500 hover:text-white group`}
                  title="Location"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                  {mediaType === 'location' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-purple-300 animate-ping" />
                  )}
                </button>

                {/* Reel */}
                <button
                  onClick={() => handleMediaTypeSelect('reel')}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700 
                    ${
                      mediaType === 'reel'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }
                    hover:bg-green-500 hover:text-white group`}
                  title="Reel"
                >
                  <FontAwesomeIcon icon={faPlayCircle} className="w-4 h-4" />
                  {mediaType === 'reel' && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-green-300 animate-ping" />
                  )}
                </button>
              </div>

              {/* Attachment & Post Buttons */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-[#303030] hover:bg-[#505050] rounded-md transition-colors group"
                >
                  <FontAwesomeIcon
                    icon={faPaperclip}
                    className="w-4 h-4 text-cyan-400 mr-2 transition-transform duration-300 group-hover:rotate-12"
                  />
                  Attach File
                </button>

                <button
                  onClick={handlePostSubmit}
                  className="relative inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-md transition-transform hover:scale-105 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2" />
                  Post
                </button>
              </div>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={closePostModal}
              className="absolute top-2 right-2 text-gray-300 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ========== Tailwind Keyframe Animations for glitch, spin, etc. ========== */}
      <style>{`
        /* Slow spin for neon circle */
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
        
        /* Slow pulse for background gradient */
        .animate-pulse-slow {
          animation: pulse 10s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(0.9); }
          50% { transform: scale(1.05); }
        }

        /* Glitch overlay */
        .animate-glitch {
          animation: glitch 2.5s infinite linear;
        }
        @keyframes glitch {
          0% {
            opacity: 0.05;
            transform: translateX(-10%);
          }
          25% {
            opacity: 0.1;
            transform: translateX(10%);
          }
          50% {
            opacity: 0.08;
            transform: translateX(-5%);
          }
          75% {
            opacity: 0.12;
            transform: translateX(4%);
          }
          100% {
            opacity: 0.05;
            transform: translateX(0%);
          }
        }
      `}</style>
    </>
  );
};

export default TripperNav;