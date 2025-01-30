import React from 'react';

// Import any required images
import MarrakechImage from './expimg/MarrakechSouks.jpg'; // Example placeholder image
import TangerImage from './expimg/TangerMedina.jpg';
import SaharaImage from './expimg/DakhlaDesert.jpg';
import CasablancaImage from './expimg/CasablancaCity.jpg';
import RabatImage from './expimg/RabatTour.jpg';
import FourSeasonsImage from './expimg/FourSeason.jpg';
import HyattRegencyImage from './expimg/Hyatt.jpg'; // Updated hotel image
import RicksCafeImage from './expimg/Ricks.jpg';
import LaSqalaImage from './expimg/Cabestan.jpg';
import LeCabestanImage from './expimg/Cabestan.jpg';

const Explore = () => {
  const featuredPlaces = [
    { title: 'Marrakech Souks', location: 'Marrakech', image: MarrakechImage, weather: '28°C', event: false },
    { title: 'Rabat Tour', location: 'Rabat', image: RabatImage, weather: '24°C', event: false },
    { title: 'Sahara Desert Adventure', location: 'Dakhla', image: SaharaImage, weather: '35°C', event: true },
    { title: 'Tanger Medina Experience', location: 'Tanger', image: TangerImage, weather: '26°C', event: false },
  ];

  const placesToVisit = [
    { title: 'Four Seasons Hotel Casablanca', description: 'A luxurious hotel with breathtaking ocean views and world-class amenities.', reward: '350 WER', image: FourSeasonsImage },
    { title: 'Hyatt Regency Casablanca', description: 'A luxury hotel in the heart of Casablanca, offering modern comfort and fine dining.', reward: '200 WER', image: HyattRegencyImage }, // Updated hotel description
    { title: 'Rick\'s Café', description: 'A famous restaurant modeled after the café in the movie "Casablanca," serving Moroccan and international dishes.', reward: '770 WER', image: RicksCafeImage },
    { title: 'La Sqala', description: 'A charming restaurant offering traditional Moroccan cuisine in a historical setting.', reward: '550 WER', image: LaSqalaImage },
    { title: 'Le Cabestan', description: 'A seaside restaurant known for its upscale seafood dishes and stunning ocean views.', reward: '200 WER', image: LeCabestanImage },
  ];

  return (
    <div className="bg-[#222222] text-white">
      {/* Hero Section */}
      <div
        className="relative h-56 mb-6 rounded-lg overflow-hidden mx-auto w-4/5"
        style={{ backgroundImage: `url(${SaharaImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
        <div className="relative z-10 p-4 mt-14">
          <p className="text-sm text-gray-300">1000 WER Reward • Sahara Adventure</p>
          <h2 className="text-xl font-bold">A  journey through the dunes of Morocco</h2>
          <button className="mt-2 bg-white text-black px-3 py-1 rounded-full text-sm">Book Now</button>
        </div>
      </div>

      {/* Main Section: Grid layout for Featured Experiences and Places to Visit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mx-auto w-4/5">
        {/* Featured Section on the left */}
        <div>
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-bold">Featured Experiences</h3>
            <button className="text-pink-500 text-sm">See all</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredPlaces.map((place, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden bg-[#504e4e]">
                <img src={place.image} alt={place.title} className="h-32 w-full object-cover" />
                <div className="p-3">
                  <h3 className="text-white font-bold">{place.title}</h3>
                  <p className="text-xs text-gray-300">{place.location}</p>
                  <p className="text-pink-500 text-sm mt-1">{place.weather}</p>
                </div>
              </div>
            ))}
          </div>
           {/* Newsletter Section */}
          <div className="mt-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg p-4">
            <h3 className="text-lg font-bold mb-1">Stay in the Loop</h3>
            <p className="text-xs text-white mb-3">Get updates on the latest experiences in Morocco.</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-3 py-1 rounded-full bg-white text-black focus:outline-none flex-1 text-sm"
              />
              <button className="ml-2 bg-white text-pink-500 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Places to Visit Section on the right */}
        <div className="space-y-3">
          {/* Casablanca Section on top */}
          <div
            className="relative h-40 rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${CasablancaImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Gradient background as a layer below the image */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 opacity-50"></div>
            {/* The background image itself with reduced opacity */}
            <div className="absolute inset-0 bg-opacity-40" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
            <div className="relative z-10 p-4">
              <h3 className="text-lg font-bold">Casablanca</h3>
              <p className="mt-1 text-sm">Explore the coastal city with modern flair and rich history.</p>
              <p className="mt-1 text-yellow-300 text-sm">23°C • Sunny</p>
            </div>
          </div>

          {/* Rest of the Places to Visit */}
          <h3 className="text-lg font-bold mt-4">Places to Visit in Casablanca</h3>
          {placesToVisit.map((place, index) => (
            <div key={index} className="flex items-center bg-[#333333] rounded-lg p-3">
              <img src={place.image} alt={place.title} className="h-14 w-14 rounded-md object-cover mr-3" />
              <div>
                <h3 className="text-sm font-bold">{place.title}</h3>
                <p className="text-xs text-gray-400">{place.description}</p>
                {place.reward && <p className="text-pink-500 text-sm mt-1">{place.reward}</p>}
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default Explore;
