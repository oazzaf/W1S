import React from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import SearchEngine from '../../components/trippers/home/SearchEngine';

const TripperHome = () => {
  return (
    <div>
      <TripperNav />
      <SearchEngine />
      {/* Other components and content specific to TripperHome */}
    </div>
  );
};

export default TripperHome;
