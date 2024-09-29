import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa'; // Medal icon for rewards
import casablancaImage from './cities/casablanca.jpg';
import marrakechImage from './cities/marrakech.png';
import rabatImage from './cities/rabat.jpg';
import tangerImage from './cities/tanger.jpg';
import dakhlaImage from './cities/dakhla.jpeg';
import agadirImage from './cities/agadir.jpg';
import MarocMap from './cities/MarocMap1.png'; // Import the MarocMap image
import welogo from './cities/transwesafa.png'; // Import the Wesafar logo

// Import Google Fonts for each city
import '@fontsource/playfair-display'; // For Casablanca
import '@fontsource/dancing-script'; // For Marrakech
import '@fontsource/roboto-slab'; // For Rabat
import '@fontsource/cinzel'; // For Tanger
import '@fontsource/lobster'; // For Dakhla
import '@fontsource/abril-fatface'; // For Agadir

// City data with gradientColor and custom fonts
const cities = [
  { title: "Casablanca", imageUrl: casablancaImage, reward: "33,550", description: "A vibrant city with rich history and modern energy.", gradientColor: "#4682B4", fontFamily: "'Playfair Display', serif" },
  { title: "Marrakech", imageUrl: marrakechImage, reward: "29,400", description: "Experience the wonders of Marrakech, where tradition meets modernity.", gradientColor: "#C1440E", fontFamily: "'Dancing Script', cursive" },
  { title: "Rabat", imageUrl: rabatImage, reward: "10,200", description: "A cultural hub and Morocco's capital with ancient charm.", gradientColor: "#4169E1", fontFamily: "'Roboto Slab', serif" },
  { title: "Tanger", imageUrl: tangerImage, reward: "11,000", description: "Explore the fusion of European and Moroccan cultures in this port city.", gradientColor: "#2E8B57", fontFamily: "'Cinzel', serif" },
  { title: "Dakhla", imageUrl: dakhlaImage, reward: "12,500", description: "An adventurer’s paradise with beautiful beaches and desert landscapes.", gradientColor: "#D2B48C", fontFamily: "'Lobster', cursive" },
  { title: "Agadir", imageUrl: agadirImage, reward: "20,200", description: "A coastal gem with relaxing beaches and exciting city life.", gradientColor: "#FF7F50", fontFamily: "'Abril Fatface', cursive" },
];

const MainQuest = ({ onSelectCity }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="min-h-screen bg-[#222222] relative overflow-hidden text-white flex flex-col items-center justify-start px-4 lg:px-40 py-20 lg:py-40">
      {/* MarocMap Image at the Top */}
      <div className="w-full flex justify-center mb-10">
        <img
          src={MarocMap}
          alt="Map of Morocco"
          className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-h-[400px] object-contain"
        />
      </div>

      {/* Expanded City View */}
      {selectedCity ? (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-[#222222] p-6 sm:p-10 lg:p-20 rounded-3xl shadow-2xl text-center transition-all duration-700 ease-in-out"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <motion.div
            className="relative w-full h-60 sm:h-80 md:h-96 bg-cover bg-center rounded-2xl overflow-hidden"
            style={{ backgroundImage: `url(${selectedCity.imageUrl})` }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-2xl"></div>
          </motion.div>
          <h1
            className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: selectedCity.fontFamily }}
          >
            {selectedCity.title}
          </h1>
          <p className="mt-4 text-sm sm:text-lg lg:text-xl max-w-2xl">
            {selectedCity.description}
          </p>
          {/* Reward Badge with Medal Icon and Logo */}
          <div className="mt-6 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] px-4 py-2 rounded-full shadow-lg">
            <FaMedal className="text-yellow-400 text-3xl" />
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
              {selectedCity.reward} <img src={welogo} alt="WER Logo" className="inline w-6 h-6" />
            </p>
          </div>
          {/* Explore Button with Medal Icon Inside */}
          <motion.button
            className="mt-6 px-8 py-3 sm:py-4 lg:px-12 lg:py-5 bg-gradient-to-r from-[#ff6a5c] to-[#d93775] rounded-full text-sm sm:text-lg lg:text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 ring-[#ff6a5c] flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSelectCity(selectedCity.title)}
          >
            <span>Explore {selectedCity.title}</span>
          </motion.button>
          <button
            className="mt-8 text-gray-400 hover:text-gray-300 underline"
            onClick={() => setSelectedCity(null)}
          >
            Back to Cities
          </button>
        </motion.div>
      ) : (
        <div className="flex justify-center items-center w-full max-w-screen-xl mx-auto py-8 lg:py-20">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-8 w-[120%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          >
            {cities.map((city, index) => (
              <motion.div
                key={index}
                className="group relative w-full sm:w-[100%] md:w-[95%] lg:w-[90%] xl:w-[85%] bg-cover bg-center rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer transition-all mx-auto"
                onClick={() => handleCitySelect(city)} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundImage: `url(${city.imageUrl})`,
                  backgroundSize: 'cover',
                }}
              >
                {/* Dynamic Holographic Overlay Color */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-transparent opacity-50 group-hover:opacity-75 transition-opacity rounded-2xl"
                  style={{ backgroundColor: city.gradientColor }}
                ></div>

                <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center text-center transition-all duration-300 transform group-hover:scale-105">
                  <motion.h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4"
                    style={{ fontFamily: city.fontFamily }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {city.title}
                  </motion.h2>
                  {/* Enhanced Reward Text in City Card with Logo */}
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <FaMedal className="text-yellow-400 text-2xl" />
                    <p className="text-lg sm:text-xl font-extrabold text-white bg-gradient-to-r from-[#222222] to-[#222222] px-3 py-1 rounded-full shadow-lg">
                      {city.reward} <img src={welogo} alt="WER Logo" className="inline w-5 h-5" />
                    </p>
                  </div>
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
