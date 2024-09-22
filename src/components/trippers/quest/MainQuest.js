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
    <div className="min-h-screen bg-[#222222] relative overflow-hidden">
      {/* Expanded City View */}
      {selectedCity ? (
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center bg-[#222222] text-white p-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="relative w-full h-80 bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${selectedCity.imageUrl})` }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-xl"></div>
          </motion.div>
          <h1 className="text-5xl font-extrabold neon-text mt-6">{selectedCity.title}</h1>
          <p className="text-lg text-gray-300 max-w-xl text-center mt-6 mb-8">{selectedCity.description}</p>
          <p className="text-2xl text-[#ff6a5c] font-semibold mb-6">Reward: {selectedCity.Reward}</p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-[#ff6a5c] via-[#ff6a5c] to-[#d93775] rounded-full text-lg font-bold text-white"
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
            Back to Cities
          </button>
        </motion.div>
      ) : (
        <div className="flex justify-center items-center h-screen w-screen">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            {cities.map((city, index) => (
              <motion.div
                key={index}
                className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transition-all"
                onClick={() => handleCitySelect(city)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundImage: `url(${city.imageUrl})`,
                  backgroundSize: 'cover',
                }}
              >
                {/* Holographic overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 hover:opacity-80 transition-opacity"></div>

                <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center">
                  <motion.h2
                    className="text-4xl font-bold text-white mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {city.title}
                  </motion.h2>
                  <p className="text-lg text-gray-400 mb-4">{city.Reward}</p>

                  {/* Explore button appears on hover */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold">
                      Explore
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MainQuest;
