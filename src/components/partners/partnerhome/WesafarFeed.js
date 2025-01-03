import React from 'react';
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
import partner2 from '../../partners/partnermedia/partnerimage/profile3.jpg';
import partner3 from '../../partners/partnermedia/partnerimage/profile3.jpg';
import saharaSunset from '../../partners/partnermedia/partnerimage/profile3.jpg';
import cafeAtlantic from '../../partners/partnermedia/partnerimage/profile3.jpg';

// If you're storing videos in the same /assets directory:
import marrakechTour from '../../partners/partnermedia/partnervideo/partnerfeed.MP4';
import surfReel from '../../partners/partnermedia/partnerimage/suressaouira.jpg';

// 2. Update your mock data to reference these imports
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
    media: marrakechTour, // imported video
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
    media: 'https://goo.gl/maps/xyz123', // location link remains a string
    avatar: partner1,
    timestamp: '3 hours ago',
  },
  {
    id: 5,
    type: 'partner',
    mediaType: 'photo',
    name: 'Café Argania',
    description: 'Enjoy freshly brewed Moroccan mint tea 🍵 with a view of the Atlantic.',
    media: cafeAtlantic,
    avatar: partner2,
    timestamp: '6 hours ago',
  },
  {
    id: 6,
    type: 'partner',
    mediaType: 'reel',
    name: 'Essaouira Surf School',
    description: 'Catch the waves with us 🌊🏄‍♂️! Your adventure starts here.',
    media: surfReel, // imported video
    avatar: partner3,
    timestamp: '2 days ago',
  },
];

const WesafarFeed = () => {
  return (
    <div className="bg-[#222222] rounded-lg shadow-lg p-6">
      <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Community Feed
      </h2>
      <div className="space-y-8">
        {mockData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-700">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full border-2 border-cyan-500"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.timestamp}</p>
              </div>
              {item.type === 'partner' && (
                <span className="ml-auto px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-[#a158ef] via-[#e34cf4] to-[#4890f4]">
                  Partner
                </span>
              )}
              {item.type === 'tripper' && (
                <span className="ml-auto px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-[#ff8a7a] via-[#ff6a5c] to-[#d93775]">
                  Tripper
                </span>
              )}
            </div>

            {/* Media Rendering */}
            <div>
              {item.mediaType === 'image' && (
                <img
                  src={item.media}
                  alt={item.description}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
              {item.mediaType === 'video' && (
                <video
                  controls
                  className="w-full h-72 object-cover rounded-lg"
                >
                  <source src={item.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {item.mediaType === 'status' && (
                <div className="p-4 bg-gray-700 rounded-md">
                  <p className="text-gray-300 text-base">{item.description}</p>
                </div>
              )}
              {item.mediaType === 'location' && (
                <div className="p-4 bg-gray-700 rounded-md">
                  <p className="text-gray-300 text-base">
                    Location:{' '}
                    <a
                      href={item.media}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              )}
              {item.mediaType === 'reel' && (
                <video
                  loop
                  autoPlay
                  muted
                  className="w-full h-72 object-cover rounded-lg"
                >
                  <source src={item.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-800 border-t border-gray-700">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <FontAwesomeIcon icon={faHeartOutline} />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                <FontAwesomeIcon icon={faCommentOutline} />
                <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
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