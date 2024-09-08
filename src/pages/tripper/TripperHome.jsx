// src/pages/tripper/TripperHome.jsx
import React, { useState } from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import SearchEngine from '../../components/trippers/home/SearchEngine';
import Featured from '../../components/trippers/home/Featured';

const TripperHome = () => {
  // State to toggle between SearchEngine and Featured
  const [isFeaturedVisible, setIsFeaturedVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Popular'); // Default category

  // Function to show the Featured component
  const showFeatured = (category) => {
    setSelectedCategory(category);
    setIsFeaturedVisible(true);
  };

  // Function to go back to SearchEngine
  const showSearchEngine = () => {
    setIsFeaturedVisible(false);
  };

  return (
    <div>
      <TripperNav />
      {/* Conditionally render either SearchEngine or Featured based on isFeaturedVisible */}
      {!isFeaturedVisible ? (
        <SearchEngine onSeeAllClick={showFeatured} /> // Pass function to SearchEngine
      ) : (
        <Featured category={selectedCategory} onBackClick={showSearchEngine} /> // Pass function to Featured
      )}
    </div>
  );
};

export default TripperHome;
