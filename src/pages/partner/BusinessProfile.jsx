import React, { useState } from 'react';
import PartnerNav from '../../components/partners/PartnerNav';
import ProfileP from '../../components/partners/partnerprofile/ProfileP';
import MetricsDashboard from '../../components/partners/partnerprofile/MetricsDashboard';
import TripperInsights from '../../components/partners/partnerprofile/TripperInsights';
import ContentShowcase from '../../components/partners/partnerprofile/ContentShowcase';
import CollaborationOpportunities from '../../components/partners/partnerprofile/CollaborationOpportunities';
import UpcomingEvents from '../../components/partners/partnerprofile/UpcomingEvents';

const PartnerProfile = () => {
  const [activeComponent, setActiveComponent] = useState('MetricsDashboard');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu
  
    const components = [
      { name: 'MetricsDashboard', label: 'Metrics Dashboard' },
      { name: 'TripperInsights', label: 'Tripper Insights' },
      { name: 'ContentShowcase', label: 'Content Showcase' },
      { name: 'CollaborationOpportunities', label: 'Collaboration Opportunities' },
      { name: 'UpcomingEvents', label: 'Upcoming Events' },
    ];
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='h-[500vh] bg-[#222222]'>
      <PartnerNav />
      <ProfileP />
      {/* Other components and content specific to TripperHome */}
      <div className="p-6 md:mt-11">
              {/* Responsive Navigation */}
              <div className="sm:hidden mb-6 mt-14">
                {/* Dropdown Menu for Small Screens */}
                <button
                  onClick={toggleMenu}
                  className="w-full bg-gray-800 text-gray-300 px-4 py-3 rounded-lg flex justify-between items-center"
                >
                  {components.find((comp) => comp.name === activeComponent)?.label}
                  <span className={`transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                    ▼
                  </span>
                </button>
                {isMenuOpen && (
                  <ul className="bg-gray-800 rounded-lg mt-2 shadow-lg">
                    {components.map((comp) => (
                      <li
                        key={comp.name}
                        className="px-4 py-2 hover:bg-gray-700 transition-colors cursor-pointer"
                        onClick={() => {
                          setActiveComponent(comp.name);
                          setIsMenuOpen(false); // Close menu on selection
                        }}
                      >
                        {comp.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
      
              {/* Inline Buttons for Large Screens */}
              <div className="hidden sm:flex flex-wrap justify-center space-x-6 mb-12 mt-[0rem]">
                {components.map((comp) => (
                  <button
                    key={comp.name}
                    onClick={() => setActiveComponent(comp.name)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-transform transform hover:scale-110 ${
                      activeComponent === comp.name
                        ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white shadow-2xl'
                        : 'bg-gray-800 text-gray-300'
                    }`}
                  >
                    {comp.label}
                  </button>
                ))}
              </div>
      
              {/* Conditionally Render Components */}
              {activeComponent === 'MetricsDashboard' && <MetricsDashboard />}
              {activeComponent === 'TripperInsights' && <TripperInsights />}
              {activeComponent === 'ContentShowcase' && <ContentShowcase />}
              {activeComponent === 'CollaborationOpportunities' && <CollaborationOpportunities />}
              {activeComponent === 'UpcomingEvents' && <UpcomingEvents />}
            </div>
    </div>
  );
};

export default PartnerProfile;