import React, { useState } from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import MainQuest from '../../components/trippers/quest/MainQuest';
import CitiesQuest from '../../components/trippers/quest/CitiesQuest';

const TripperQuests = () => {
  // State to track the selected city
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className='bg-#222222'>
      <TripperNav />
      {/* Pass setSelectedCity to MainQuest so it can update the selected city */}
      <MainQuest onSelectCity={setSelectedCity} />
      {/* Pass the selected city to CitiesQuest */}
      <CitiesQuest selectedCity={selectedCity} />
    </div>
  );
};

export default TripperQuests;
