import React, { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faSearch, faPlus, faCamera, faVideo, faMapMarkerAlt, faPlayCircle, faPaperclip, faRocket } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faComments, // Messages (regular/outlined)
  faUser,     // Profile  (regular/outlined)
  faFlag,     // Quest   (placeholder icon)
} from '@fortawesome/free-regular-svg-icons';

import { useNavigate, useLocation } from 'react-router-dom';

const PartnerNav = () => {
  const [selected, setSelected] = useState('');
  const [isPostingModalOpen, setIsPostingModalOpen] = useState(false);

  // ====== State for your CREATE POST snippet ======
  const [postText, setPostText] = useState('');
  const [mediaType, setMediaType] = useState('');

  // ====== Handlers for your CREATE POST snippet ======
  const handleMediaTypeSelect = (type) => {
    setMediaType(type);
  };

  const handlePostSubmit = () => {
    // Place your post creation logic here
    console.log('Posting with text:', postText);
    console.log('Media type selected:', mediaType);
    // e.g., send to server

    // Close modal or reset fields
    closePostModal();
    setPostText('');
    setMediaType('');
  };

  const navigate = useNavigate();
  const location = useLocation();

  // Navigation items for partners
  const navItems = useMemo(
    () => [
      { name: 'Explore', icon: faHome, path: '/partner/explore' },
      { name: 'Quest', icon: faFlag, path: '/partner/quest' },
      { name: 'Messages', icon: faComments, path: '/partner/messages' },
      { name: 'Profile', icon: faUser, path: '/partner/profile' },
    ],
    []
  );

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

  const openPostModal = () => setIsPostingModalOpen(true);
  const closePostModal = () => setIsPostingModalOpen(false);

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
            {/* Explore */}
            <button
              onClick={() => handleNavClick('Explore', '/partner/explore')}
              className={`flex flex-col items-center relative ${
                selected === 'Explore' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              <FontAwesomeIcon
                icon={faHome}
                size="2x"
                className={`${
                  selected === 'Explore' ? 'text-[#a158ef]' : 'text-gray-500'
                }`}
              />
              <span
                className={`mt-1 text-sm ${
                  selected === 'Explore'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                    : 'text-gray-500'
                }`}
              >
                Explore
              </span>
              {selected === 'Explore' && (
                <div className="absolute bottom-[-41.5px] w-full h-[2px] bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4] z-10"></div>
              )}
            </button>

            {/* Quest */}
            <button
              onClick={() => handleNavClick('Quest', '/partner/quest')}
              className={`flex flex-col items-center relative ${
                selected === 'Quest' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              <FontAwesomeIcon
                icon={faFlag}
                size="2x"
                className={`${
                  selected === 'Quest' ? 'text-[#a158ef]' : 'text-gray-500'
                }`}
              />
              <span
                className={`mt-1 text-sm ${
                  selected === 'Quest'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                    : 'text-gray-500'
                }`}
              >
                Quest
              </span>
              {selected === 'Quest' && (
                <div className="absolute bottom-[-41.5px] w-full h-[2px] bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4] z-10"></div>
              )}
            </button>

            {/* Add Post Button */}
            <button
              onClick={openPostModal}
              title="Create a Post"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4] text-white text-2xl 
                         shadow-md hover:shadow-lg hover:scale-105 transition-transform border-2 border-transparent"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>

            {/* Messages */}
            <button
              onClick={() => handleNavClick('Messages', '/partner/messages')}
              className={`flex flex-col items-center relative ${
                selected === 'Messages' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              <FontAwesomeIcon
                icon={faComments}
                size="2x"
                className={`${
                  selected === 'Messages' ? 'text-[#a158ef]' : 'text-gray-500'
                }`}
              />
              <span
                className={`mt-1 text-sm ${
                  selected === 'Messages'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                    : 'text-gray-500'
                }`}
              >
                Messages
              </span>
              {selected === 'Messages' && (
                <div className="absolute bottom-[-41.5px] w-full h-[2px] bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4] z-10"></div>
              )}
            </button>

            {/* Profile */}
            <button
              onClick={() => handleNavClick('Profile', '/partner/profile')}
              className={`flex flex-col items-center relative ${
                selected === 'Profile' ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="2x"
                className={`${
                  selected === 'Profile' ? 'text-[#a158ef]' : 'text-gray-500'
                }`}
              />
              <span
                className={`mt-1 text-sm ${
                  selected === 'Profile'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                    : 'text-gray-500'
                }`}
              >
                Profile
              </span>
              {selected === 'Profile' && (
                <div className="absolute bottom-[-41.5px] w-full h-[2px] bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4] z-10"></div>
              )}
            </button>
          </div>

          {/* Right Section (Notification and Search) */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 relative">
              <FontAwesomeIcon icon={faBell} size="lg" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]"></span>
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

      {/* Mobile Top Navigation Bar */}
      <nav className="bg-[#222222] fixed top-0 left-0 w-full flex justify-between items-center py-5 px-4 xl:hidden z-50">
        <button className="text-gray-500">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
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

      {/* Mobile Bottom Navigation Bar */}
      <nav className="bg-[#222222] fixed bottom-0 left-0 w-full flex justify-around items-center py-5 px-1 xl:hidden z-50">
        {/* Explore */}
        <button
          onClick={() => handleNavClick('Explore', '/partner/explore')}
          className={`flex flex-col items-center ${
            selected === 'Explore' ? 'text-white' : 'text-gray-500'
          }`}
        >
          <FontAwesomeIcon
            icon={faHome}
            size="lg"
            className={`${
              selected === 'Explore' ? 'text-[#a158ef]' : 'text-gray-500'
            }`}
          />
          <span
            className={`mt-1 text-xs ${
              selected === 'Explore'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                : 'text-gray-500'
            }`}
          >
            Explore
          </span>
        </button>

        {/* Quest */}
        <button
          onClick={() => handleNavClick('Quest', '/partner/quest')}
          className={`flex flex-col items-center ${
            selected === 'Quest' ? 'text-white' : 'text-gray-500'
          }`}
        >
          <FontAwesomeIcon
            icon={faFlag}
            size="lg"
            className={`${
              selected === 'Quest' ? 'text-[#a158ef]' : 'text-gray-500'
            }`}
          />
          <span
            className={`mt-1 text-xs ${
              selected === 'Quest'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                : 'text-gray-500'
            }`}
          >
            Quest
          </span>
        </button>

        {/* Add Post Button */}
        <button
          onClick={openPostModal}
          title="Create a Post"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4] 
                     text-white text-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform border-2 border-transparent"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>

        {/* Messages */}
        <button
          onClick={() => handleNavClick('Messages', '/partner/messages')}
          className={`flex flex-col items-center ${
            selected === 'Messages' ? 'text-white' : 'text-gray-500'
          }`}
        >
          <FontAwesomeIcon
            icon={faComments}
            size="lg"
            className={`${
              selected === 'Messages' ? 'text-[#a158ef]' : 'text-gray-500'
            }`}
          />
          <span
            className={`mt-1 text-xs ${
              selected === 'Messages'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                : 'text-gray-500'
            }`}
          >
            Messages
          </span>
        </button>

        {/* Profile */}
        <button
          onClick={() => handleNavClick('Profile', '/partner/profile')}
          className={`flex flex-col items-center ${
            selected === 'Profile' ? 'text-white' : 'text-gray-500'
          }`}
        >
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            className={`${
              selected === 'Profile' ? 'text-[#a158ef]' : 'text-gray-500'
            }`}
          />
          <span
            className={`mt-1 text-xs ${
              selected === 'Profile'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]'
                : 'text-gray-500'
            }`}
          >
            Profile
          </span>
        </button>
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

              {/* Text area */}
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
    </>
  );
};

export default PartnerNav;