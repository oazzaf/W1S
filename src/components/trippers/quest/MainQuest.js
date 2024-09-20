import React, { useState } from 'react';
import { motion } from 'framer-motion';
import casablancaImage from './cities/casablanca.jpg';
import marrakechImage from './cities/marrakech.png';
import rabatImage from './cities/rabat.jpg';
import tangerImage from './cities/tanger.jpg';
import dakhlaImage from './cities/dakhla.jpeg';
import agadirImage from './cities/agadir.jpg';

// City data
const cities = [
  { title: "Casablanca", imageUrl: casablancaImage, Reward: "33,550 WER", description: "A vibrant city with rich history and modern energy." },
  { title: "Marrakech", imageUrl: marrakechImage, Reward: "29,400 WER", description: "Experience the wonders of Marrakech, where tradition meets modernity." },
  { title: "Rabat", imageUrl: rabatImage, Reward: "10,200 WER", description: "A cultural hub and Morocco's capital with ancient charm." },
  { title: "Tanger", imageUrl: tangerImage, Reward: "11,000 WER", description: "Explore the fusion of European and Moroccan cultures in this port city." },
  { title: "Dakhla", imageUrl: dakhlaImage, Reward: "12,500 WER", description: "An adventurer’s paradise with beautiful beaches and desert landscapes." },
  { title: "Agadir", imageUrl: agadirImage, Reward: "20,200 WER", description: "A coastal gem with relaxing beaches and exciting city life." },
];

const MainQuest = ({ onSelectCity }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  // Handle city selection
  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden">
      {/* If a city is selected, show the expanded view */}
      {selectedCity ? (
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-extrabold neon-text mb-6">{selectedCity.title}</h1>
          <p className="text-lg text-gray-300 max-w-xl text-center mb-8">{selectedCity.description}</p>
          <p className="text-2xl text-green-400 font-semibold mb-6">Reward: {selectedCity.Reward}</p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-lg font-bold text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSelectCity(selectedCity.title)}
          >
            Explore {selectedCity.title}
          </motion.button>
          <button
            className="mt-10 text-gray-400 underline"
            onClick={() => setSelectedCity(null)}
          >
            Back to Overview
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="relative group bg-black bg-opacity-60 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => handleCitySelect(city)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundImage: `url(${city.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl font-bold text-white mb-4 group-hover:scale-105 transition-transform">{city.title}</h2>
                <p className="text-lg text-gray-400 group-hover:scale-105 transition-transform">{city.Reward}</p>
              </div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full text-white font-semibold"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleCitySelect(city)}
                >
                  Explore
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainQuest;
