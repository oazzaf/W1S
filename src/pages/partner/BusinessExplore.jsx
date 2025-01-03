import React from 'react';
import PartnerNav from '../../components/partners/PartnerNav';
import PartnerExplore from '../../components/partners/partnerhome/PartnerExplore';
import WesafarFeed from '../../components/partners/partnerhome/WesafarFeed'; // Import the feed component

const PartnerHome = () => {
  return (
    <div className="bg-[#222222] h-[290vh] text-white">
      {/* Navigation Bar */}
      <PartnerNav />
      <div className="">
        
      </div>
      {/* Main Explore Section */}
      <div className="mt-16">
        <PartnerExplore />
      </div>
      {/* Wesafar Feed Section */}
      <div className="mt-6 px-4">
        <WesafarFeed />
      </div>
    </div>
  );
};

export default PartnerHome;