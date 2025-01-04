import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faVideo,
  faMapMarkerAlt,
  faPlayCircle,
  faPaperclip,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

const PartnerExplore = () => {
  const [postText, setPostText] = useState('');
  const [mediaType, setMediaType] = useState('text'); // default type

  const handleMediaTypeSelect = (type) => {
    setMediaType((prev) => (prev === type ? 'text' : type));
  };

  const handlePostSubmit = () => {
    if (!postText.trim()) return;

    // In a real app, you’d send the data to your backend or global state here.
    console.log('New Post =>', {
      text: postText,
      mediaType,
    });

    // Reset form
    setPostText('');
    setMediaType('text');
  };

  return (
    <section className="relative p-6 rounded-xl bg-[#141414] shadow-2xl overflow-hidden">
      {/* Neon gradient glow backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[40%] w-[60rem] h-[60rem] bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-[-40%] right-[-30%] w-[50rem] h-[50rem] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-10 mix-blend-lighten animate-spin-slow" />
      </div>

      <div className="relative z-10 space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.6)]">
            Explore Opportunities
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Elevate your presence, engage with Trippers, and unlock futuristic growth avenues.
          </p>
        </div>

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
                ${mediaType === 'photo' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'} 
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
                ${mediaType === 'video' ? 'bg-pink-600 text-white' : 'bg-gray-700 text-gray-300'}
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
                ${mediaType === 'location' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}
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
                ${mediaType === 'reel' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}
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
      </div>

      {/* Custom Keyframe Animations */}
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
    </section>
  );
};

export default PartnerExplore;
