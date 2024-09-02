import React, { useEffect, useState } from 'react';
import dmRoadmapImage from '../img/rm/dmRoadmap.png';
import roadBgVideo from '../video/roadBg.mp4'; // Import the video

const points = [
  { left: '7.7%', top: '60%' },
  { left: '18%', top: '27%' },
  { left: '28.4%', top: '60%' },
  { left: '38.7%', top: '27.8%' },
  { left: '48.9%', top: '63.6%' },
  { left: '59.1%', top: '29.7%' },
  { left: '69.4%', top: '67%' },
  { left: '79.7%', top: '30.7%' },
  { left: '90%', top: '67%' },
];

const colors = [
  '#f7b338',
  '#f47e37',
  '#e6433e',
  '#cf2351',
  '#b01a62',
  '#872871',
  '#6a307b',
  '#593582',
  '#3c3f8f',
];

const phases = [
  {
    title: 'Phase 1: Launch of Wesafar WebApp (Q3 2024)',
    details: [
      'User Pre-Registration: Open pre-registration for Wesafar users.',
      'Finalization of Marketing and Business Plan: Complete and finalize the comprehensive marketing and business strategy.',
      'Wait List registration for Trippers and Business Partners.',
      'Core Modules Development:',
      'Home Page: Design and develop the main interface for user interaction.',
      'Search Page: Implement the search functionality allowing users to find content and connections.',
      'Posting Page: Enable users to create and share posts.',
      'Messaging Page: Develop the messaging system for communication between users.',
      'Profile Page: Create user profile pages for personalized experiences.',
      'Testing and Debugging: Perform rigorous testing and fix any bugs.',
      'Beta Testing: Conduct a closed beta test with selected users to gather feedback.',
      'Feedback Integration: Integrate beta user feedback into the final product.',
      'Launch Preparation: Prepare all necessary resources and support for the official launch.',
    ],
  },
  {
    title: 'Phase 2: Development and Marketing (Q4 2024)',
    details: [
      'Development of Wesafar V.0: Begin the development of the initial version of the Wesafar app.',
      'Marketing and Commercial Launch: Execute the marketing and commercial plan.',
      'Pre-Recruitment: Start pre-recruitment of future Wesafar team members.',
      'Team Formation: Assemble the core development, marketing, and support teams.',
      'Marketing Campaign: Launch an initial marketing campaign to create awareness and attract early adopters.',
      'Engage Influencers: Partner with travel influencers to promote Wesafar.',
      'Local Partnerships: Form partnerships with local businesses and tourism agencies.',
      'Continuous Development: Continue developing core features and functionalities.',
      'Monitoring and Analytics Setup: Implement tools for tracking user engagement and performance metrics.',
      'Community Outreach: Organize events and webinars to engage with potential users and partners.',
      'Content Creation: Develop content for the platform, including blogs, guides, and promotional materials.',
    ],
  },
  {
    title: 'Phase 3: Launch of Wesafar V.0 (Q1 2025)',
    details: [
      'Release of Wesafar V.0: Launch the initial version with the following features:',
      'AI-Powered Personalized Recommendations: Integrate AI to suggest personalized travel experiences.',
      'Content Creation and Sharing for Trippers: Enable users to create and share travel content.',
      'Authentic Connections with Other Users: Facilitate connections and interactions between users.',
      'Personalized Profiles for Trippers: Allow users to create and customize their profiles.',
      'Initial Deployment: Roll out the platform in Paris.',
      'Data Analytics: Begin processing Wesafar data analytics.',
      'User Onboarding: Implement an onboarding process to guide new users.',
      'Support and Helpdesk: Establish a helpdesk to assist users with any issues.',
      'Marketing Push: Intensify marketing efforts to attract more users.',
      'Feedback Collection: Gather user feedback to identify areas for improvement.',
      'Bug Fixes and Updates: Address any issues and release updates as needed.',
      'Community Building: Encourage user engagement and community building activities.',
    ],
  },
  {
    title: 'Phase 4: Business Partner Features (Q2 2025)',
    details: [
      'Release of Wesafar V.0.1: Launch the updated version with features for business partners:',
      'Creation of Business Profiles: Enable business partners to create and manage their profiles.',
      'Availability and Rate Management: Implement tools for managing availability and pricing.',
      'Online Reservation and Payment System: Develop a system for online bookings and payments.',
      'Real-Time Messaging between Trippers and Business Partners: Enable direct communication.',
      'Next City Deployment: Deployment in Marrakesh.',
      'Business Partner Onboarding: Onboard initial business partners and provide training.',
      'Partnership Promotions: Promote the benefits of joining Wesafar to potential business partners.',
      'Feedback Integration: Gather and implement feedback from business partners.',
      'Enhanced Analytics: Provide business partners with tools to track performance metrics.',
      'Continuous Improvement: Regularly update and improve business partner features.',
      'Market Research: Conduct market research to identify new business opportunities.',
      'Business Workshops: Organize workshops and webinars for business partners to maximize their use of the platform.',
      'Customer Support Training: Train support teams to handle business partner queries and issues efficiently.',
    ],
  },
  {
    title: 'Phase 5: Enhanced Travel Planning (Q3 2025)',
    details: [
      'Release of Wesafar V.0.2: Launch the updated version with advanced features:',
      'Wesafar Events for Business Partners: Enable business partners to organize and promote events.',
      'Wesafar Club for Premium Content Access: Offer exclusive content and benefits to club members.',
      'Interactive Travel Planning Tool: Develop tools for users to plan their trips.',
      'Easy Online Reservations for Activities and Accommodations: Streamline booking processes.',
      'Interactive Maps and GPS Itineraries: Provide detailed maps and offline GPS functionalities.',
      'Tripper Reviews and Ratings: Implement a system for users to review and rate services.',
      'Personalized Notifications for Trippers: Send personalized alerts and updates.',
      'Next City Deployment: Deployment in Casablanca.',
      'User Training: Provide tutorials and guides for using new features.',
      'Marketing and Promotion: Launch campaigns to promote new features.',
      'Feedback and Iteration: Collect feedback and continuously improve the platform.',
      'Partnership Expansion: Form new partnerships to enhance service offerings.',
    ],
  },
  {
    title: 'Phase 6: Quest Completion and Business Analytics (Q4 2025)',
    details: [
      'Release of Wesafar V.0.3: Launch new functionalities:',
      'Quest Completion for Trippers: Introduce quests that users can complete for rewards.',
      'Statistics and Analytics for Business Partners: Provide advanced analytics tools.',
      'Support and Training for Business Partners: Offer training and support resources.',
      'Sponsored Content by Business Partners: Enable businesses to sponsor content.',
      'Direct Connection with Trippers for Service Promotion: Facilitate direct promotions.',
      'Deployment in the United States: Expand to USA.',
      'User Engagement: Implement strategies to increase user engagement.',
      'Advanced Analytics: Improve data analytics capabilities.',
      'Business Partner Support: Enhance support services for business partners.',
      'Continuous Feedback: Collect and act on feedback from trippers and partners.',
      'Community Events: Organize events to foster community engagement.',
      'Market Expansion: Identify and enter new markets.',
    ],
  },
  {
    title: 'Phase 7: Multimedia Integration and Customer Support (Q1 2026)',
    details: [
      'Release of Wesafar V.0.4: Introduce additional features:',
      'Multimedia Content Integration for Business Partners: Allow partners to upload and manage media content.',
      'Response to Reviews and Feedback from Trippers: Enable businesses to respond to reviews.',
      '24/7 Customer Support: Provide round-the-clock customer support.',
      'Travel Guides and Local Tips: Offer comprehensive travel guides and tips.',
      'Promotion of Local Engagement for Responsible Tourism: Encourage responsible tourism practices.',
      'Deployment in the Middle east: Expand to Dubai.',
      'Enhanced User Support: Improve support channels and resources.',
      'Content Enrichment: Enrich content with multimedia elements.',
      'Feedback Mechanisms: Implement robust feedback mechanisms.',
      'Marketing and Outreach: Increase marketing efforts to reach new users.',
      'Partnership Development: Strengthen existing partnerships and form new ones.',
      'Community Building: Foster a sense of community among users and partners.',
    ],
  },
  {
    title: 'Phase 8: Advanced Planning and Virtual Events (Q2 2026)',
    details: [
      'Release of Wesafar V.0.5: Launch with enhanced features:',
      'Integrated Travel Planning Tools for Trippers: Provide advanced tools for trip planning.',
      'Personalized Notifications: Send targeted notifications to users.',
      'Participation in Virtual Events in Wesafar Metaverse: Enable users to join virtual events.',
      'Airdrops for the Most Loyal Trippers: Reward loyal users with token airdrops.',
      'Advanced Search and Filtering Features: Enhance search capabilities with advanced filters.',
      'Deployment in Asia.',
      'Virtual Event Hosting: Develop capabilities for hosting virtual events.',
      'User Rewards: Implement reward programs for active users.',
      'Feedback and Improvement: Continuously collect and act on user feedback.',
      'Community Engagement: Increase efforts to engage the community.',
      'Feature Enhancements: Regularly update and enhance platform features.',
      'Partnership Initiatives: Launch initiatives to strengthen partnerships.',
    ],
  },
  {
    title: 'Phase 9: Token Launch and Marketplace Enhancements (Q3 2026 - Q4 2026)',
    details: [
      'Release of Wesafar V.0.6 and V.0.7: Launch significant updates:',
      'Launch of WER Token',
      'Use of WER Tokens for Exclusive Purchases and Sponsorships',
      'Enhancement of the Wesafar Marketplace',
      'Creation of Virtual Events by Business Partners',
      'Marketplace for Trading Physical and Digital Assets',
      'Wesafar Metaverse for Virtual Experiences',
      'Additional Immersive Experiences in Wesafar Metaverse',
      'Enhanced Monetization Opportunities for Business Partners',
      'Development of New Features Based on User Feedback',
      'Integration of Emerging Travel Technologies',
      'Optimization of Existing Features',
      'Deployment in Dakhla and Northern Morocco: Expand to Dakhla and Northern Morocco region.',
      'Regional Expansion:',
      'Deployment in Central Morocco and Africa',
      'Expansion of Wesafar Ecosystem to Other Regions and Countries',
      'Full Rollout:',
      'Complete Extension of Wesafar Metaverse',
      'Continuous User Experience Improvement',
      'Ongoing Evaluation and Adjustment of Marketing and Partnership Strategies',
      'Achieve full deployment across the Kingdom of Morocco.',
    ],
  },
];

const ImageGallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const adjustPosition = (value, offset) => {
    const numericValue = parseFloat(value);
    const adjustedValue = numericValue + offset;
    return `${adjustedValue}%`;
  };

  const pointStyle = (left, top, index) => {
    const adjustedLeft = window.innerWidth === 1024 ? adjustPosition(left, -1) : left;
    const adjustedTop = window.innerWidth === 1024 ? adjustPosition(top, -2) : top;

    const isHoveredOrSelected = hoveredIndex === index || selectedIndex === index;

    return {
      position: 'absolute',
      left: isMobile ? adjustPosition(left, -1.4) : adjustedLeft,
      top: isMobile ? adjustPosition(top, -0.5) : adjustedTop,
      width: isMobile ? '20px' : '40px',
      height: isMobile ? '20px' : '40px',
      borderRadius: '50%',
      backgroundColor: colors[index],
      transition: 'transform 0.3s, box-shadow 0.3s',
      boxShadow: `0 0 10px 2px ${colors[index]}`,
      transform: isHoveredOrSelected ? 'scale(1.5)' : 'scale(1)',
      cursor: 'pointer',
      zIndex: 5, // Ensure the points are above the video and overlay
    };
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: `7px solid ${colors[selectedIndex]}`,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // More opaque background for better visibility
    padding: '24px', // Increased padding
    borderRadius: '12px', // Slightly more rounded corners
    marginTop: '16px',
    width: '90%',
    color: 'gray', // Ensure text is white for contrast
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)', // Add shadow for depth
    zIndex: 5, // Ensure the cards are above the video and overlay
  };

  const titleStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
    textTransform: 'uppercase',
    fontFamily: 'Orbitron',
    textAlign: 'center',
    zIndex: 5, // Ensure the title is above the video and overlay
    color: colors[selectedIndex],
  };

  const detailStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1em',
    marginBottom: '0.5em',
    lineHeight: '1.5',
    fontFamily: 'Poppins',
    justifyContent: 'center',
  };

  const boldDetailStyle = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: '1em',
    fontFamily: 'Orbitron',
    justifyContent: 'center',
  };

  const bulletStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: colors[selectedIndex],
    marginRight: '8px', // Space between bullet and text
  };

  // Check if the selectedIndex is within the bounds of the phases array
  const currentPhase = phases[selectedIndex] || phases[0];

  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center bg-transparent" id="roadmap" style={{ zIndex: 4 }}>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={roadBgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-[#222222] opacity-90 z-1"></div>

      <div className="relative w-full h-auto" style={{ zIndex: 5 }}>
        <img
          src={dmRoadmapImage}
          alt="dmRoadmap"
          className="w-full h-auto object-cover"
          style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
        />
        {points.map((point, index) => (
          <div
            key={index}
            style={pointStyle(point.left, point.top, index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      <div style={cardStyle}>
        <h3 style={titleStyle}>{currentPhase.title}</h3>
        <ul style={{ textAlign: 'center', padding: 0, listStyle: 'none' }}>
          {currentPhase.details.map((detail, index) => (
            <li
              key={index}
              style={index === 0 || detail.endsWith(':') ? boldDetailStyle : detailStyle}
            >
              <span style={bulletStyle}></span> {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <ImageGallery />
    </div>
  );
};

export default App;