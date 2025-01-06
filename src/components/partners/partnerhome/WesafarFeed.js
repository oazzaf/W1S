import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart as faHeartOutline,
  faComment as faCommentOutline,
  faShareSquare as faShareOutline,
} from '@fortawesome/free-regular-svg-icons';

// 1. Import all required images & videos from your `src` folders
import tripper1 from '../../partners/partnermedia/partnerimage/profile1.jpg';
import tripper2 from '../../partners/partnermedia/partnerimage/profile2.jpg';
import tripper3 from '../../partners/partnermedia/partnerimage/profile3.jpg';
import partner1 from '../../partners/partnermedia/partnerimage/riadandalous.jpg';
import partner2 from '../../partners/partnermedia/partnerimage/cafeAtlantic.jpg'; // Cafe Atlantic profile
import saharaSunset from '../../partners/partnermedia/partnerimage/saharaSunset.jpg';


// If you're storing videos in the same /assets directory:
import marrakechTour from '../../partners/partnermedia/partnervideo/partnerfeed.MP4';
import surfReel from '../../partners/partnermedia/partnerimage/suressaouira.jpg';

// 2. Updated mock data
const mockData = [
  // Trippers
  {
    id: 1,
    type: 'tripper',
    mediaType: 'image',
    name: 'Youssef El Idrissi',
    description: 'Sunset over the Sahara dunes 🌅',
    media: saharaSunset,
    avatar: tripper1,
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    type: 'tripper',
    mediaType: 'status',
    name: 'Fatima Zahra',
    description: 'Hiking in the Atlas Mountains is a surreal experience! 🏔️',
    avatar: tripper2,
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    type: 'tripper',
    mediaType: 'video',
    name: 'Ahmed Benkirane',
    description: 'Exploring the vibrant streets of Marrakech 🕌✨',
    media: marrakechTour,
    avatar: tripper3,
    timestamp: '1 day ago',
  },

  // Partners
  {
    id: 4,
    type: 'partner',
    mediaType: 'location',
    name: 'Riad Al Andalous',
    description: 'Visit us in the heart of Fez. Authentic Moroccan hospitality awaits!',
    media: 'https://goo.gl/maps/xyz123',
    avatar: partner1,
    timestamp: '3 hours ago',
  },
  {
    id: 5,
    type: 'partner',
    mediaType: 'photo',
    name: 'Café Atlantic',
    description: 'Enjoy freshly brewed Moroccan mint tea 🍵 with a view of the Atlantic.',
    // The post image is now the same as the profile picture, i.e. partner2.
    media: partner2,
    avatar: partner2, 
    timestamp: '6 hours ago',
  },
  {
    id: 6,
    type: 'partner',
    mediaType: 'photo',
    name: 'Essaouira Surf School',
    description: 'Catch the waves with us 🌊🏄‍♂️! Your adventure starts here.',
    media: surfReel,
    avatar: surfReel,
    timestamp: '2 days ago',
  },
];

// Utility function to shuffle an array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
}

// Generate a random integer between min and max
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const WesafarFeed = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    // 1. Filter out only 'photo' or 'image' and one 'status' post
    const filteredData = mockData.filter((item) => {
      return (
        item.mediaType === 'image' ||
        item.mediaType === 'photo' ||
        item.mediaType === 'status'
      );
    });

    // 2. Shuffle the filtered data
    let shuffledData = shuffleArray(filteredData);

    // 3. For each post, add random likes & comments count
    shuffledData = shuffledData.map((item) => ({
      ...item,
      likes: randomInt(0, 500),
      comments: randomInt(0, 100),
    }));

    // 4. Update state
    setFeedData(shuffledData);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg p-6 bg-[#101010] shadow-xl">
      {/* Subtle floating gradient layers for a futuristic effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/3 -left-1/4 w-[70vw] h-[70vw] bg-gradient-to-r from-[#0ff] to-[#00f] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-r from-[#ff009a] to-[#fc6767] opacity-10 rounded-full blur-3xl" />
      </div>

      <h2 className="relative z-10 mb-6 bg-gradient-to-r from-[#00f5ff] via-[#00ffa6] to-[#f0ff00] bg-clip-text text-4xl font-extrabold text-transparent drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
        Community Feed
      </h2>

      <div className="relative z-10 space-y-8">
        {feedData.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border border-gray-800 bg-[#181818] shadow-md transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/40"
          >
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-800">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-14 w-14 rounded-full border-2 border-cyan-500 shadow-lg transition-transform duration-300 group-hover:rotate-6"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-100">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
              {item.type === 'partner' && (
                <span className="ml-auto rounded-full bg-gradient-to-r from-[#d580ff] via-[#f14cf4] to-[#48f4f0] px-3 py-1 text-xs font-bold text-white shadow-sm">
                  Partner
                </span>
              )}
              {item.type === 'tripper' && (
                <span className="ml-auto rounded-full bg-gradient-to-r from-[#ff6a5c] via-[#ff33ee] to-[#ff8a7a] px-3 py-1 text-xs font-bold text-white shadow-sm">
                  Tripper
                </span>
              )}
            </div>

            {/* Media Rendering */}
            <div className="overflow-hidden">
              {(item.mediaType === 'image' || item.mediaType === 'photo') && (
                <img
                  src={item.media}
                  alt={item.description}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}

              {/* Single status post remains, display text */}
              {item.mediaType === 'status' && (
                <div className="p-4">
                  <p className="rounded-md bg-[#1f1f1f] p-4 text-base text-gray-300 shadow-inner">
                    {item.description}
                  </p>
                </div>
              )}
            </div>

            {/* Description (if not status type) */}
            {item.mediaType !== 'status' && (
              <div className="p-4 bg-[#181818]">
                <p className="text-gray-300">{item.description}</p>
              </div>
            )}

            {/* Actions with random likes & comments */}
            <div className="flex items-center justify-between border-t border-gray-800 bg-[#181818] px-4 py-3">
              <button className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-cyan-400">
                <FontAwesomeIcon icon={faHeartOutline} />
                <span>{item.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-cyan-400">
                <FontAwesomeIcon icon={faCommentOutline} />
                <span>{item.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 transition-colors hover:text-cyan-400">
                <FontAwesomeIcon icon={faShareOutline} />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WesafarFeed;
