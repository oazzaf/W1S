import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLander from './pages/HomeLander';

// Tripper Pages
import TripperHome from './pages/tripper/TripperHome';
import TripperProfile from './pages/tripper/TripperProfile';
import TripperQuests from './pages/tripper/TripperQuests';
import TripperMarketplace from './pages/tripper/TripperMarketplace';
import TripperEvents from './pages/tripper/TripperEvents';
import TripperNotifications from './pages/tripper/TripperNotifications';
import TripperMessages from './pages/tripper/TripperMessages';
import TripperSettings from './pages/tripper/TripperSettings';
import TripperHelp from './pages/tripper/TripperHelp';

// Business Pages
import BusinessExplore from './pages/partner/BusinessExplore';
import BusinessProfile from './pages/partner/BusinessProfile';
import BusinessDash from './pages/partner/BusinessDash';
import BusinessEvents from './pages/partner/BusinessEvents';
import BusinessMessages from './pages/partner/BusinessMessages';
import BusinessQuest from './pages/partner/BusinessQuest';
import BusinessSettings from './pages/partner/BusinessSettings';
import BusinessHelp from './pages/partner/BusinessHelp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLander />} />
        
        {/* Tripper Routes */}
        <Route path="/tripper/home" element={<TripperHome />} />
        <Route path="/tripper/profile" element={<TripperProfile />} />
        <Route path="/tripper/quests" element={<TripperQuests />} />
        <Route path="/tripper/marketplace" element={<TripperMarketplace />} />
        <Route path="/tripper/events" element={<TripperEvents />} />
        <Route path="/tripper/notifications" element={<TripperNotifications />} />
        <Route path="/tripper/messages" element={<TripperMessages />} />
        <Route path="/tripper/settings" element={<TripperSettings />} />
        <Route path="/tripper/help" element={<TripperHelp />} />

        {/* Business Routes */}
        <Route path="/partner/explore" element={<BusinessExplore />} />
        <Route path="/partner/profile" element={<BusinessProfile />} />
        <Route path="/partner/dash" element={<BusinessDash />} />
        <Route path="/partner/events" element={<BusinessEvents />} />
        <Route path="/partner/messages" element={<BusinessMessages />} />
        <Route path="/partner/quest" element={<BusinessQuest />} />
        <Route path="/partner/settings" element={<BusinessSettings />} />
        <Route path="/partner/help" element={<BusinessHelp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
