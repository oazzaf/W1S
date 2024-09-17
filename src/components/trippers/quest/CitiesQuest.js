import React from 'react';
import FourSeasonsImage from './expimg/FourSeason.jpg';
import HyattRegencyImage from './expimg/Hyatt.jpg';
import RicksCafeImage from './expimg/Ricks.jpg';
import LaSqalaImage from './expimg/Sqala.jpg';
import LeCabestanImage from './expimg/Cabestan.jpg';

const placesToVisit = [
  { title: 'Four Seasons Hotel Casablanca', description: 'A luxurious hotel with breathtaking ocean views and world-class amenities.', reward: '350 WER', image: FourSeasonsImage },
  { title: 'Hyatt Regency Casablanca', description: 'A luxury hotel in the heart of Casablanca, offering modern comfort and fine dining.', reward: '200 WER', image: HyattRegencyImage },
  { title: "Rick's Café", description: 'A famous restaurant modeled after the café in the movie "Casablanca," serving Moroccan and international dishes.', reward: '770 WER', image: RicksCafeImage },
  { title: 'La Sqala', description: 'A charming restaurant offering traditional Moroccan cuisine in a historical setting.', reward: '550 WER', image: LaSqalaImage },
  { title: 'Le Cabestan', description: 'A seaside restaurant known for its upscale seafood dishes and stunning ocean views.', reward: '200 WER', image: LeCabestanImage },
];

const CitiesQuest = () => {
  return (
    <div>
      {placesToVisit.map((place, index) => (
        <div key={index} className="bg-gray-900 rounded-lg p-4 mb-4 flex items-center">
          <img src={place.image} alt={place.title} className="w-24 h-24 rounded-lg object-cover mr-4" />
          <div className="flex-1">
            <h3 className="text-white text-xl font-semibold">{place.title}</h3>
            <p className="text-gray-400">{place.description}</p>
            <p className="text-gray-400">Reward: {place.reward}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CitiesQuest;
