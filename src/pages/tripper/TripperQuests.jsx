import React from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import MainQuest from '../../components/trippers/quest/MainQuest';
import CitiesQuest from '../../components/trippers/quest/CitiesQuest';

const TripperQuests = () => {
  return (
    <div className='bg-#222222'>
      <TripperNav />
      <MainQuest />
      <CitiesQuest />
    </div>
  );
};

export default TripperQuests;
