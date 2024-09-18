import React from 'react';
import casablancaImage from './cities/casablanca.jpg';
import marrakechImage from './cities/marrakech.png';
import rabatImage from './cities/rabat.jpg';
import tangerImage from './cities/tanger.jpg';
import dakhlaImage from './cities/dakhla.jpeg';
import agadirImage from './cities/agadir.jpg';

const cities = [
  { title: "Casablanca", imageUrl: casablancaImage, location: "Morocco", distance: 500, Reward: "33550 WER", weather: "22° Sunny", likes: "2k", comments: "300", supportLocal: true },
  { title: "Marrakech", imageUrl: marrakechImage, location: "Morocco", distance: 300, Reward: "29400 WER", weather: "28° Sunny", likes: "1.8k", comments: "250", supportLocal: true },
  { title: "Rabat", imageUrl: rabatImage, location: "Morocco", distance: 1500, Reward: "10200 WER", weather: "18° Cloudy", likes: "10k", comments: "1.5k", supportLocal: false },
  { title: "Tanger", imageUrl: tangerImage, location: "Morocco", distance: 300, Reward: "11000 WER", weather: "28° Sunny", likes: "1.8k", comments: "250", supportLocal: true },
  { title: "Dakhla", imageUrl: dakhlaImage, location: "Morocco", distance: 1500, Reward: "12500 WER", weather: "18° Cloudy", likes: "10k", comments: "1.5k", supportLocal: false },
  { title: "Agadir", imageUrl: agadirImage, location: "Morocco", distance: 1500, Reward: "20200 WER", weather: "18° Cloudy", likes: "10k", comments: "1.5k", supportLocal: false },
];

const MainQuest = ({ onSelectCity }) => {
  return (
    <div className='bg-[#222222]'>
      {cities.map((city, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4 flex items-center">
          <img src={city.imageUrl} alt={city.title} className="w-24 h-24 rounded-lg object-cover mr-4" />
          <div className="flex-1">
            <h2 className="text-white text-lg font-bold">{city.title}</h2>
            <p className="text-gray-400">{city.location}</p>
            <p className="text-gray-400">Distance: {city.distance} km</p>
            <p className="text-gray-400">Reward: {city.Reward}</p>
            <p className="text-gray-400">Weather: {city.weather}</p>
            <p className="text-gray-400">Likes: {city.likes} • Comments: {city.comments}</p>
            {city.supportLocal && (
              <span className="text-green-400 font-semibold">Supports Local</span>
            )}
          </div>
          {/* On click, pass the selected city title to the parent */}
          <button className="text-white bg-red-500 rounded-lg px-4 py-2" onClick={() => onSelectCity(city.title)}>
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainQuest;
