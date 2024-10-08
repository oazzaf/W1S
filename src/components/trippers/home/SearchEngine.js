// src/components/trippers/home/SearchEngine.js
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import casablancaImage from './cities/casablanca.jpg';
import marrakechImage from './cities/marrakech.png';
import rabatImage from './cities/rabat.jpg';
import Majorelle from './popular/majorel.png';
import mosquesH2 from './popular/mosquesH2.jpg';
import desertSafari from './activities/desertSafari.jpg';
import safariDesert from './activities/safariDesert.png';


const SearchEngine = ({ onSeeAllClick }) => { // Receive onSeeAllClick as prop
  const [category, setCategory] = useState('Popular');
  const [containerHeight, setContainerHeight] = useState('h-[calc(100vh-5vh)]');

  const locationsData = useMemo(
    () => ({
      Popular: [
        { title: "Hassan II Mosque", imageUrl: mosquesH2, location: "Casablanca", distance: 257, price: "Free", weather: "25° Sunny", likes: "10k", comments: "1.2k", supportLocal: true },
        { title: "Majorelle Garden", imageUrl: Majorelle, location: "Marrakech", distance: 300, price: "70 WER", weather: "30° Sunny", likes: "8k", comments: "900", supportLocal: true },
      ],
      Cities: [
        { title: "Casablanca", imageUrl: casablancaImage, location: "Morocco", distance: 500, price: "550 WER", weather: "22° Sunny", likes: "2k", comments: "300", supportLocal: true },
        { title: "Marrakech", imageUrl: marrakechImage, location: "Morocco", distance: 300, price: "400 WER", weather: "28° Sunny", likes: "1.8k", comments: "250", supportLocal: true },
        { title: "Rabat", imageUrl: rabatImage, location: "France", distance: 1500, price: "1200 WER", weather: "18° Cloudy", likes: "10k", comments: "1.5k", supportLocal: false },
      ],
      Activities: [
        { title: "Desert Safari", imageUrl: safariDesert, location: "Merzouga", distance: 800, price: "1200 WER", weather: "35° Sunny", likes: "4k", comments: "500", supportLocal: true },
        { title: "Camel Ride in Sahara", imageUrl: desertSafari, location: "Zagora", distance: 950, price: "900 WER", weather: "33° Sunny", likes: "3.5k", comments: "450", supportLocal: true },
      ],
    }),
    []
  );

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setContainerHeight('h-[calc(100vh-8vh)] overflow-auto');
    } else if (window.innerWidth <= 1024) {
      setContainerHeight('h-[calc(100vh-1vh)] overflow-hidden');
    } else {
      setContainerHeight('h-[calc(100vh-9vh)] overflow-hidden');
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const handleCategoryChange = useCallback((event) => {
    setCategory(event.target.value);
  }, []);

  const handleSeeAllClick = () => {
    onSeeAllClick(category); // Call the function passed via props to show Featured
  };

  const AdventureCard = ({ title, location, distance, price, weather, likes, comments, imageUrl }) => (
    <div className="bg-[#504e4e] rounded-xl w-full sm:w-[14rem] lg:w-[18rem] transition-transform transform hover:scale-105 shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-36 sm:h-40 lg:h-48 object-cover rounded-t-xl" />
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-400">{location} • {distance} Km away</p>
        <p className="text-lg font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">{price}</p>
        <div className="flex justify-between text-gray-400 text-sm">
          <span>{weather}</span>
          <span>❤️ {likes}</span>
          <span>💬 {comments}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`relative bg-[#222222] p-8 text-white flex flex-col justify-center items-center ${containerHeight}`}>
      <div className="mt-[50rem] mb-[20rem] sm:mt-[-7rem] sm:mb-0">
        <h2 className="text-4xl text-center mb-8 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Discover Your Next Adventure</h2>
        
        <div className="flex justify-between mb-10 w-full z-10">
          <select
            value={category}
            onChange={handleCategoryChange}
            className="bg-transparent text-lg p-2 sm:p-1 text-white border-b-2 border-pink-500 focus:outline-none"
            aria-label="Select adventure category"
          >
            <option value="Popular">Popular</option>
            <option value="Cities">Cities</option>
            <option value="Activities">Activities</option>
          </select>

          {/* See All button that triggers the switch to Featured */}
          <button
            onClick={handleSeeAllClick}
            className="flex items-center gap-2 text-white px-5 py-2 rounded-full border-2 border-gradient-to-r from-pink-500 to-red-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 transition duration-300 ease-in-out"
          >
            See All
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        
        <h3 className="text-xl mb-4 text-center uppercase tracking-wider">Featured</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-1 w-full">
          {locationsData[category]?.map((location, index) => (
            <AdventureCard key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
