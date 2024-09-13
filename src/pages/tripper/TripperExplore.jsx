import React, { useState } from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import Activities from '../../components/trippers/explore/Activities';
import Explore from '../../components/trippers/explore/Explore';

const TripperExplore = () => {
  const [activeTab, setActiveTab] = useState('activities'); // Default is Activities

  return (
    <div className="bg-[#222222] h-[260vh]">
      <TripperNav />

      {/* Navigation Tabs */}
      <div className="flex justify-center items-center mb-5 bg-[#222222] mt-[3rem]">
        <div className="flex items-center">
          {/* Activities Tab */}
          <button
            onClick={() => setActiveTab('activities')}
            className={`relative px-4 py-3 text-white transition-colors duration-300 ${activeTab === 'activities' ? 'border-b-2 border-[#ff6f61]' : 'border-none'} focus:outline-none`}
          >
            Activities
          </button>

          {/* Vertical Divider */}
          <div className="h-6 w-px bg-gray-400 mx-3"></div>

          {/* Explore Tab */}
          <button
            onClick={() => setActiveTab('explore')}
            className={`relative px-4 py-3 text-white transition-colors duration-300 ${activeTab === 'explore' ? 'border-b-2 border-[#ff6f61]' : 'border-none'} focus:outline-none`}
          >
            Explore
          </button>
        </div>
      </div>

      {/* Conditionally Render the Components */}
      <div>
        {activeTab === 'activities' && <Activities />}
        {activeTab === 'explore' && <Explore />}
      </div>
    </div>
  );
};

export default TripperExplore;
