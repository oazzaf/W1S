import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHeart, faCommentDots, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Importing Images
import hotAir from './activities/hotAir.jpg';
import camelRide from './activities/camelRide.png';
import desertSafari from './activities/safariDesert.png';
import Majorelle from './popular/majorel.png';
import mosquesH2 from './popular/mosquesH2.jpg';
import kasbaUdaya from './popular/kasbaUdaya.jpg';
import tanger from './cities/tanger.jpg';
import dakhla from './cities/dakhla.jpeg';
import agadir from './cities/agadir.jpg';
import casablancaImage from './cities/casablanca.jpg';
import marrakechImage from './cities/marrakech.png';
import rabatImage from './cities/rabat.jpg';

// Location Data
const locationsData = {
  Popular: [
    { title: "Hassan II Mosque", imageUrl: mosquesH2, location: "Casablanca", distance: 257, price: "$free", likes: "4k", comments: "766" },
    { title: "Majorelle Garden", imageUrl: Majorelle, location: "Marrakech", distance: 300, price: "120 WER", likes: "3.5k", comments: "600" },
    { title: "Kasbah of the Udayas", imageUrl: kasbaUdaya, location: "Rabat", distance: 1500, price: "$free", likes: "2k", comments: "430" },
  ],

  Cities: [
    { title: "Casablanca", imageUrl: casablancaImage, location: "Morocco", distance: 500, price: "550 WER", weather: "22° Sunny", likes: "2k", comments: "300", supportLocal: true },
    { title: "Marrakech", imageUrl: marrakechImage, location: "Morocco", distance: 300, price: "400 WER", weather: "28° Sunny", likes: "1.8k", comments: "250", supportLocal: true },
    { title: "Rabat", imageUrl: rabatImage, location: "Morocco", distance: 1500, price: "1200 WER", weather: "18° Cloudy", likes: "10k", comments: "1.5k", supportLocal: false },
    { title: "Tanger", imageUrl: tanger, location: "Morocco", distance: 300, price: "400 WER", weather: "28° Sunny", likes: "1.8k", comments: "250", supportLocal: true },
    { title: "Dakhla", imageUrl: dakhla, location: "Morocco", distance: 1500, price: "1200 WER", weather: "18° Cloudy", likes: "10k", comments: "1.5k", supportLocal: false },
    { title: "Agadir", imageUrl: agadir, location: "Morocco", distance: 1500, price: "1200 WER", weather: "18° Cloudy", likes: "10k", comments: "1.5k", supportLocal: false },
  ],
  
  Activities: [
    { title: "Desert Safari", imageUrl: desertSafari, location: "Merzouga", distance: 800, price: "400 WER", likes: "4k", comments: "500" },
    { title: "Camel Ride in Sahara", imageUrl: camelRide, location: "Zagora", distance: 950, price: "350 WER", likes: "3.5k", comments: "450" },
    { title: "Hot Air Balloon Ride", imageUrl: hotAir, location: "Marrakech", distance: 300, price: "600 WER", likes: "2k", comments: "300" },
  ],
};

const Featured = ({ category, onBackClick }) => {
  return (
    <div className="relative bg-[#222222] text-white flex flex-col justify-center items-center min-h-screen">
      {/* Content Container */}
      <div className="mb-20 mt-16 sm:mt-24 lg:mt-[-20rem] w-full overflow-y-auto p-4 sm:p-8">  
        <h2 className="text-2xl sm:text-4xl text-center mb-6 sm:mb-8 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
          Featured {category}
        </h2>

        {/* Back Button */}
        <button
          onClick={onBackClick}
          className="mb-6 sm:mb-9 flex items-center gap-2 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full border-2 border-gradient-to-r from-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>  

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-1 w-full">
          {locationsData[category]?.map((location, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden w-full flex flex-col sm:flex-row transition-transform transform hover:scale-105 shadow-md">
              {/* Image Section */}
              <img src={location.imageUrl} alt={location.title} className="w-full sm:w-40 h-40 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none" />
   
              {/* Card Content */}
              <div className="p-4 text-gray-900 flex-1">
                {/* Title and Price */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{location.title}</h3>
                  <div className="text-right">
                    <p className="text-sm font-bold">{location.price}</p>
                    {location.oldPrice && (
                      <p className="text-xs text-gray-700 line-through">{location.oldPrice}</p>
                    )}
                  </div>
                </div>
   
                {/* Location */}
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>{location.location}</span>
                </div>
   
                {/* Likes and Comments */}
                <div className="flex justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faHeart} className="mr-1" />
                    <span>{location.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCommentDots} className="mr-1" />
                    <span>{location.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
