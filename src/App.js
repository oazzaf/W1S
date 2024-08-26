import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeLander from './pages/HomeLander';

// Tripper Pages
import TripperExplore from './pages/tripper/TripperExplore';
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
import BusinessAnalytics from './pages/partner/BusinessAnalytics';
import BusinessMarketplace from './pages/partner/BusinessMarketplace';
import BusinessEvents from './pages/partner/BusinessEvents';
import BusinessMessages from './pages/partner/BusinessMessages';
import BusinessOffers from './pages/partner/BusinessOffers';
import BusinessSettings from './pages/partner/BusinessSettings';
import BusinessHelp from './pages/partner/BusinessHelp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLander />} />
        
        {/* Tripper Routes */}
        <Route path="/tripper/explore" element={<TripperExplore />} />
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
        <Route path="/partner/analytics" element={<BusinessAnalytics />} />
        <Route path="/partner/marketplace" element={<BusinessMarketplace />} />
        <Route path="/partner/events" element={<BusinessEvents />} />
        <Route path="/partner/messages" element={<BusinessMessages />} />
        <Route path="/partner/offers" element={<BusinessOffers />} />
        <Route path="/partner/settings" element={<BusinessSettings />} />
        <Route path="/partner/help" element={<BusinessHelp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
