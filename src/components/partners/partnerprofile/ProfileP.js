import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faChartLine,
  faFileContract,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

import profilePicture from './imgs/FourSeasons.jpg';

const BusinessPartnerProfile = () => {
  const [postText, setPostText] = useState('');
  const [mediaType, setMediaType] = useState('text');

  const handleMediaTypeSelect = (type) => {
    setMediaType((prev) => (prev === type ? 'text' : type));
  };

  const handlePostSubmit = () => {
    if (!postText.trim()) return;
    console.log('New Post =>', { text: postText, mediaType });
    setPostText('');
    setMediaType('text');
  };

  // Four Seasons–focused data
  const businessGoals = [
    {
      title: 'Global Portfolio Expansion',
      description: 'Open 5 new luxury properties worldwide. 60% completed',
      progress: 60,
    },
    {
      title: 'Luxury Guest Experiences',
      description: 'Enhance curated experiences and increase guest loyalty. 40% completed',
      progress: 40,
    },
  ];

  const recentDeals = [
    { title: 'New Resort Opening in Tokyo', amount: 2500000 },
    { title: 'Partnership with World-Renowned Spa Brand', amount: 1500000 },
  ];

  const achievements = [
    {
      name: 'Forbes 5-Star Award',
      imageUrl: 'https://via.placeholder.com/50',
      description: 'Recognized among the top luxury hotels worldwide',
    },
    {
      name: 'AAA Five Diamond',
      imageUrl: 'https://via.placeholder.com/50',
      description: 'Highest rating for world-class service and facilities',
    },
    {
      name: 'Michelin-Starred Dining',
      imageUrl: 'https://via.placeholder.com/50',
      description: 'Exquisite culinary experiences in multiple locations',
    },
  ];

  // Keeping the same color scheme
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '60px auto',
      backgroundColor: '#222',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      color: '#fff',
    },
    header: {
      textAlign: 'center',
      background: 'linear-gradient(135deg, #a158ef, #e34cf4, #4890f4)',
      padding: '24px',
      borderRadius: '12px',
      position: 'relative',
    },
    profileImage: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      border: '4px solid #fff',
      display: 'block',       // ensures it's treated like a block element
      margin: '0 auto',       // centers the image horizontally
    },
    name: {
      fontSize: '28px',
      marginTop: '12px',
      fontWeight: 'bold',
      color: '#fff',
    },
    role: {
      fontSize: '18px',
      background: 'linear-gradient(90deg, #a158ef, #e34cf4, #4890f4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '600',
      marginTop: '8px',
    },
    editButton: {
      background: 'linear-gradient(90deg, #a158ef, #e34cf4, #4890f4)',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      marginTop: '12px',
      fontWeight: '600',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderBottom: '1px solid #333',
    },
    statNumber: {
      fontSize: '22px',
      fontWeight: '700',
      background: 'linear-gradient(90deg, #a158ef, #e34cf4, #4890f4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    statLabel: {
      color: '#ccc',
      fontSize: '14px',
    },
    aboutSection: {
      backgroundColor: '#333',
      padding: '20px',
      borderRadius: '8px',
      margin: '20px 0',
    },
    achievementContainer: {
      backgroundColor: '#333',
      padding: '16px',
      borderRadius: '8px',
      margin: '20px 0',
    },
    goalContainer: {
      backgroundColor: '#333',
      padding: '16px',
      borderRadius: '8px',
      margin: '20px 0',
    },
    goalProgress: {
      height: '8px',
      width: '100%',
      borderRadius: '8px',
      backgroundColor: '#666',
      overflow: 'hidden',
    },
    goalProgressBar: (progress) => ({
      width: `${progress}%`,
      height: '100%',
      background: 'linear-gradient(90deg, #a158ef, #e34cf4, #4890f4)',
    }),
  };

  return (
    <div style={styles.container}>
      {/* Header Section (Centered) */}
      <div style={styles.header}>
        <img
          src={profilePicture}
          alt="Four Seasons"
          style={styles.profileImage}
        />
        <h2 style={styles.name}>Four Seasons Hotels &amp; Resorts</h2>
        <p style={styles.role}>Luxury Hospitality Leader</p>
        <button style={styles.editButton}>Edit Profile</button>
      </div>

      {/* Stats Section */}
      <div style={styles.statsContainer}>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <span style={styles.statNumber}>120+</span>
          <br />
          <span style={styles.statLabel}>Properties Worldwide</span>
        </div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <span style={styles.statNumber}>47</span>
          <br />
          <span style={styles.statLabel}>Countries</span>
        </div>
        <div style={{ textAlign: 'center', flex: 1 }}>
          <span style={styles.statNumber}>98%</span>
          <br />
          <span style={styles.statLabel}>Guest Satisfaction</span>
        </div>
      </div>

      {/* About Section */}
      <div style={styles.aboutSection}>
        <h3 style={{ color: '#e34cf4', marginBottom: '12px' }}>Company Overview</h3>
        <p style={{ lineHeight: '1.6' }}>
          Four Seasons is a global leader in luxury hospitality with a portfolio of
          hotels and resorts in major city centers and exotic locations. Renowned for
          personalized service, exquisite design, and unparalleled guest experiences,
          Four Seasons continues to set the standard in the world of high-end travel.
        </p>
      </div>

      {/* Achievements */}
      <div style={styles.achievementContainer}>
        <h3 style={{ color: '#a158ef', marginBottom: '20px' }}>Industry Recognition</h3>
        {achievements.map((achievement, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              marginBottom: '12px',
              borderRadius: '8px',
              backgroundColor: '#444',
            }}
          >
            <img
              src={achievement.imageUrl}
              alt={achievement.name}
              style={{ width: '50px', height: '50px', borderRadius: '8px', marginRight: '16px' }}
            />
            <div>
              <h4>{achievement.name}</h4>
              <p style={{ color: '#ccc' }}>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Goals */}
      <div style={styles.goalContainer}>
        <h3 style={{ color: '#4890f4', marginBottom: '20px' }}>Strategic Goals</h3>
        {businessGoals.map((goal, index) => (
          <div
            key={index}
            style={{
              padding: '12px',
              marginBottom: '12px',
              backgroundColor: '#444',
              borderRadius: '8px',
            }}
          >
            <h4>{goal.title}</h4>
            <p>{goal.description}</p>
            <div style={styles.goalProgress}>
              <div style={styles.goalProgressBar(goal.progress)} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Highlights */}
      <div style={styles.goalContainer}>
        <h3 style={{ color: '#e34cf4', marginBottom: '20px' }}>Recent Highlights</h3>
        {recentDeals.map((deal, index) => (
          <div key={index} style={{ padding: '8px', marginBottom: '8px' }}>
            <FontAwesomeIcon icon={faHandshake} style={{ marginRight: '8px', color: '#a158ef' }} />
            {deal.title} - ${deal.amount.toLocaleString()}
          </div>
        ))}
      </div>

      {/* Posting Tool Section */}
      <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#e34cf4', marginBottom: '15px' }}>Share an Update</h3>
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Announce a new property opening, partnership, or highlight a unique experience..."
            style={{
              width: '100%',
              height: '100px',
              padding: '12px',
              backgroundColor: '#444',
              border: '1px solid #555',
              borderRadius: '8px',
              color: '#fff',
              marginBottom: '15px',
            }}
          />
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <button
              onClick={() => handleMediaTypeSelect('document')}
              style={{
                padding: '8px 16px',
                background:
                  mediaType === 'document'
                    ? 'linear-gradient(90deg, #a158ef, #e34cf4)'
                    : '#444',
                border: 'none',
                borderRadius: '20px',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faFileContract} /> Document
            </button>
            <button
              onClick={() => handleMediaTypeSelect('presentation')}
              style={{
                padding: '8px 16px',
                background:
                  mediaType === 'presentation'
                    ? 'linear-gradient(90deg, #e34cf4, #4890f4)'
                    : '#444',
                border: 'none',
                borderRadius: '20px',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faChartLine} /> Presentation
            </button>
          </div>
          <button
            onClick={handlePostSubmit}
            style={{
              padding: '10px 25px',
              background: 'linear-gradient(90deg, #a158ef, #e34cf4, #4890f4)',
              border: 'none',
              borderRadius: '25px',
              color: 'white',
              cursor: 'pointer',
              float: 'right',
            }}
          >
            <FontAwesomeIcon icon={faRocket} /> Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartnerProfile;