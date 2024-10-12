import React, { useState } from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import MainQuest from '../../components/trippers/quest/MainQuest';
import CitiesQuest from '../../components/trippers/quest/CitiesQuest';

const TripperQuests = () => {
  // State to track the selected city and whether to show CitiesQuest
  const [selectedCity, setSelectedCity] = useState(null);
  const [showCitiesQuest, setShowCitiesQuest] = useState(false);

  // Function to handle when a city is selected
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowCitiesQuest(true); // Show CitiesQuest when a city is selected
  };

  // Function to handle going back to MainQuest
  const handleBack = () => {
    setShowCitiesQuest(false); // Show MainQuest when Back is clicked
    setSelectedCity(null); // Optionally reset the selected city
  };

  return (
    <div className='bg-[#222222] h-[]'>
      <TripperNav />
      {!showCitiesQuest ? (
        // Show MainQuest if not viewing CitiesQuest
        <MainQuest onSelectCity={handleCitySelect} />
      ) : (
        // Show CitiesQuest when a city is selected
        <CitiesQuest selectedCity={selectedCity} onBack={handleBack} />
      )}
    </div>
  );
};

export default TripperQuests;
