import React from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import Main from '../../components/trippers/profile/Main';


const TripperProfile = () => {
  return (
    <div className='bg-[#222222] h-[300vh]'>
      <TripperNav />
      <Main />
      {/* Other components and content specific to TripperExplore */}
    </div>
  );
};

export default TripperProfile;
