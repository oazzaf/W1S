import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faVideo,
  faMapMarkerAlt,
  faPlayCircle,
  faPaperclip,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

import profilePicture from './imgProfile/OthmaneAzzaf.jpg'; // Othmane Azzaf's profile picture

const TripperProfile = () => {
  // State variables for Quests, Rewards, and Wallet Visibility (from the original code)
  const [walletHistoryVisible, setWalletHistoryVisible] = useState(false);

  // ====== NEW Posting Tool States & Handlers ======
  const [postText, setPostText] = useState('');
  const [mediaType, setMediaType] = useState('text');

  const handleMediaTypeSelect = (type) => {
    setMediaType((prev) => (prev === type ? 'text' : type));
  };

  const handlePostSubmit = () => {
    if (!postText.trim()) return;

    // In a real app, you’d send the data to your backend or global state here.
    console.log('New Post =>', {
      text: postText,
      mediaType,
    });

    // Reset form
    setPostText('');
    setMediaType('text');
  };
  // ================================================

  // Sample data for quests and recent rewards (from original code)
  const quests = [
    {
      title: 'Support Local Artisans',
      description:
        'Share your experience at a local artisan market in Casablanca. Earn 500 WER!',
      progress: 80,
    },
    {
      title: 'Eco-Friendly Traveler',
      description:
        'Join a community beach cleanup. Share a video or photos and earn 300 WER!',
      progress: 50,
    },
  ];

  const recentRewards = [
    { title: 'Completed Quest: Eco-Friendly Traveler', amount: 300 },
    { title: 'New Connection Reward', amount: 100 },
  ];

  const achievements = [
    {
      name: 'Local Guide',
      imageUrl: 'https://via.placeholder.com/50',
      description: 'Guided 10+ trippers through your city.',
    },
    {
      name: 'Eco-Warrior',
      imageUrl: 'https://via.placeholder.com/50',
      description: 'Completed 5 environmental initiatives.',
    },
    {
      name: 'Top Tripper',
      imageUrl: 'https://via.placeholder.com/50',
      description: 'Traveled to 30+ destinations.',
    },
  ];

  // Toggle the wallet history modal visibility
  const toggleWalletHistory = () => {
    setWalletHistoryVisible(!walletHistoryVisible);
  };

  // ====== Original Inline Styles (kept intact) ======
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '60px auto',
      backgroundColor: '#222222',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      color: '#fff',
    },
    header: {
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ff6a5c, #d93775, #d93775)',
      padding: '24px',
      borderRadius: '12px',
      position: 'relative',
    },
    profileImage: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      border: '4px solid #fff',
    },
    name: {
      fontSize: '28px',
      marginTop: '12px',
      fontWeight: 'bold',
    },
    role: {
      fontSize: '18px',
      color: '#ffb703',
    },
    followButton: {
      backgroundColor: '#ffb703',
      color: '#1a1a1a',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      marginTop: '12px',
    },
    walletButton: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '20px',
      border: 'none',
      cursor: 'pointer',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderBottom: '1px solid #333',
      paddingBottom: '20px',
    },
    stat: {
      textAlign: 'center',
      flex: 1,
    },
    statNumber: {
      fontSize: '22px',
      fontWeight: '700',
    },
    statLabel: {
      color: '#999',
      fontSize: '14px',
    },
    aboutSection: {
      backgroundColor: '#333',
      padding: '20px',
      borderRadius: '8px',
      margin: '20px 0',
    },
    aboutTitle: {
      fontSize: '20px',
      color: '#ffb703',
      marginBottom: '12px',
    },
    aboutText: {
      fontSize: '16px',
      lineHeight: '1.6',
    },
    achievementContainer: {
      backgroundColor: '#333',
      padding: '16px',
      borderRadius: '8px',
      margin: '20px 0',
    },
    questTitle: {
      fontSize: '20px',
      color: '#f72585',
      marginBottom: '12px',
    },
    achievementItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px',
      marginBottom: '12px',
      borderRadius: '8px',
      backgroundColor: '#444',
    },
    achievementImage: {
      width: '50px',
      height: '50px',
      borderRadius: '8px',
      marginRight: '16px',
    },
    achievementText: {
      fontSize: '16px',
      color: '#fff',
    },
    questContainer: {
      backgroundColor: '#333',
      padding: '16px',
      borderRadius: '8px',
      margin: '20px 0',
    },
    questItem: {
      padding: '12px',
      borderRadius: '8px',
      backgroundColor: '#444',
      marginBottom: '12px',
    },
    questProgress: {
      height: '8px',
      width: '100%',
      borderRadius: '8px',
      backgroundColor: '#666',
      overflow: 'hidden',
    },
    questProgressBar: (progress) => ({
      width: `${progress}%`,
      height: '100%',
      backgroundColor: progress > 70 ? '#2ecc71' : '#3498db',
    }),
    walletModal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#2a2a2a',
      padding: '20px',
      borderRadius: '12px',
      color: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
      zIndex: 10,
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 5,
    },
    closeModalButton: {
      backgroundColor: '#f72585',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '12px',
      fontWeight: '600',
    },
    rewardItem: {
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <img
          src={profilePicture}
          alt="Othmane Azzaf"
          style={styles.profileImage}
        />
        <h2 style={styles.name}>Othmane Azzaf</h2>
        <p style={styles.role}>Traveler / Local Guide</p>
        <button style={styles.followButton}>Edit Profile</button>
        <button style={styles.walletButton} onClick={toggleWalletHistory}>
          Wallet History
        </button>
      </div>

      {/* Wallet History Modal */}
      {walletHistoryVisible && (
        <>
          <div
            style={styles.modalOverlay}
            onClick={toggleWalletHistory}
          ></div>
          <div style={styles.walletModal}>
            <h3>Wallet Transaction History</h3>
            <ul>
              <li>+500 WER - Completed Quest: Support Local Artisans</li>
              <li>-200 WER - Purchased Local Merchandise</li>
              <li>+300 WER - Eco-Friendly Traveler Reward</li>
            </ul>
            <button
              style={styles.closeModalButton}
              onClick={toggleWalletHistory}
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* Stats Section */}
      <div style={styles.statsContainer}>
        <div style={styles.stat}>
          <span style={styles.statNumber}>700</span>
          <br />
          <span style={styles.statLabel}>Connections</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNumber}>65</span>
          <br />
          <span style={styles.statLabel}>Trips</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statNumber}>15,000</span>
          <br />
          <span style={styles.statLabel}>WER Balance</span>
        </div>
      </div>

      {/* About Me Section */}
      <div style={styles.aboutSection}>
        <h3 style={styles.aboutTitle}>About Me</h3>
        <p style={styles.aboutText}>
          I’m Othmane Azzaf, a passionate traveler and local guide from Casablanca.
          I love sharing the beauty of Morocco’s hidden gems and cultural
          experiences with the Wesafar community. I believe in connecting with
          people through authentic experiences and promoting responsible tourism.
        </p>
      </div>

      {/* Achievements Section */}
      <div style={styles.achievementContainer}>
        <h3 style={styles.questTitle}>Achievements</h3>
        {achievements.map((achievement, index) => (
          <div key={index} style={styles.achievementItem}>
            <img
              src={achievement.imageUrl}
              alt={achievement.name}
              style={styles.achievementImage}
            />
            <div>
              <h4>{achievement.name}</h4>
              <p style={styles.achievementText}>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Active Quests Section */}
      <div style={styles.questContainer}>
        <h3 style={styles.questTitle}>Active Quests</h3>
        {quests.map((quest, index) => (
          <div key={index} style={styles.questItem}>
            <h4>{quest.title}</h4>
            <p>{quest.description}</p>
            <div style={styles.questProgress}>
              <div
                style={styles.questProgressBar(quest.progress)}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Rewards Section */}
      <div style={styles.questContainer}>
        <h3 style={styles.questTitle}>Recent Rewards</h3>
        {recentRewards.map((reward, index) => (
          <p key={index} style={styles.rewardItem}>
            {reward.title} - Earned {reward.amount} WER
          </p>
        ))}
      </div>

      {/* ====== NEW Posting Tool (Replaces old 'Create Post' section) ====== */}
      <div
        className="relative p-6 rounded-xl bg-[#141414] shadow-2xl overflow-hidden mt-8"
        // inline style to add margin or rely on tailwind
      >
        {/* Neon gradient glow backgrounds */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-[30%] -left-[40%] w-[60rem] h-[60rem] bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-pulse-slow" />
          <div className="absolute bottom-[-40%] right-[-30%] w-[50rem] h-[50rem] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-10 mix-blend-lighten animate-spin-slow" />
        </div>

        <div className="relative z-10 space-y-8">
          {/* Title / optional heading */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_5px_rgba(0,255,255,0.6)]">
              Create a Post
            </h3>
          </div>

          {/* Posting Tool */}
          <div className="relative bg-[#1f1f1f]/90 backdrop-blur-md rounded-lg p-4 border border-gray-800 shadow-inner">
            {/* Text area with glitchy placeholder animation */}
            <div className="relative">
              <textarea
                className="w-full h-28 md:h-32 bg-[#262626] text-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 placeholder-gray-500 tracking-wide"
                placeholder="Share your latest travel thoughts..."
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
              {/* Glitch effect overlay for the placeholder area */}
              <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="w-1/2 h-full bg-gradient-to-r from-cyan-500 to-purple-500 mix-blend-overlay opacity-0 animate-glitch" />
              </div>
            </div>

            {/* Media Type Selector */}
            <div className="mt-4 flex items-center space-x-4">
              {/* Photo */}
              <button
                onClick={() => handleMediaTypeSelect('photo')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700 
                  ${
                    mediaType === 'photo'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-700 text-gray-300'
                  } 
                  hover:bg-cyan-500 hover:text-white group`}
                title="Photo"
              >
                <FontAwesomeIcon icon={faCamera} className="w-4 h-4" />
                {mediaType === 'photo' && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-cyan-300 animate-ping" />
                )}
              </button>

              {/* Video */}
              <button
                onClick={() => handleMediaTypeSelect('video')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700 
                  ${
                    mediaType === 'video'
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }
                  hover:bg-pink-500 hover:text-white group`}
                title="Video"
              >
                <FontAwesomeIcon icon={faVideo} className="w-4 h-4" />
                {mediaType === 'video' && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-pink-300 animate-ping" />
                )}
              </button>

              {/* Location */}
              <button
                onClick={() => handleMediaTypeSelect('location')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700
                  ${
                    mediaType === 'location'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }
                  hover:bg-purple-500 hover:text-white group`}
                title="Location"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                {mediaType === 'location' && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-purple-300 animate-ping" />
                )}
              </button>

              {/* Reel */}
              <button
                onClick={() => handleMediaTypeSelect('reel')}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors border border-gray-700 
                  ${
                    mediaType === 'reel'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }
                  hover:bg-green-500 hover:text-white group`}
                title="Reel"
              >
                <FontAwesomeIcon icon={faPlayCircle} className="w-4 h-4" />
                {mediaType === 'reel' && (
                  <span className="absolute inset-0 rounded-full ring-2 ring-green-300 animate-ping" />
                )}
              </button>
            </div>

            {/* Attachment & Post Buttons */}
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-[#303030] hover:bg-[#505050] rounded-md transition-colors group"
              >
                <FontAwesomeIcon
                  icon={faPaperclip}
                  className="w-4 h-4 text-cyan-400 mr-2 transition-transform duration-300 group-hover:rotate-12"
                />
                Attach File
              </button>

              <button
                onClick={handlePostSubmit}
                className="relative inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-md transition-transform hover:scale-105 hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2" />
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Tailwind Keyframe Animations (spin, pulse, glitch) */}
        <style>{`
          .animate-spin-slow {
            animation: spin 30s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0); }
            100% { transform: rotate(360deg); }
          }

          .animate-pulse-slow {
            animation: pulse 10s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(0.9); }
            50% { transform: scale(1.05); }
          }

          .animate-glitch {
            animation: glitch 2.5s infinite linear;
          }
          @keyframes glitch {
            0% {
              opacity: 0.05;
              transform: translateX(-10%);
            }
            25% {
              opacity: 0.1;
              transform: translateX(10%);
            }
            50% {
              opacity: 0.08;
              transform: translateX(-5%);
            }
            75% {
              opacity: 0.12;
              transform: translateX(4%);
            }
            100% {
              opacity: 0.05;
              transform: translateX(0%);
            }
          }
        `}</style>
      </div>
      {/* End of NEW Posting Tool Section */}
    </div>
  );
};

export default TripperProfile;
