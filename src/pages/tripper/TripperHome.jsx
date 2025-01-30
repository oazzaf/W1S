// src/pages/tripper/TripperHome.jsx
import React from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import SearchEngine from '../../components/trippers/home/SearchEngine';
import Featured from '../../components/trippers/home/Featured';
import TripperWesafarFeed from '../../components/trippers/home/TripperWesafarFeed'


const TripperHome = () => {
 

  return (
    <div className='h-[700vh] bg-[#222222]'>
      <TripperNav />
      {/* Conditionally render either SearchEngine or Featured based on isFeaturedVisible */}
      <SearchEngine />
      <TripperWesafarFeed/> 
      <Featured />
    </div>
  );
};

export default TripperHome;
