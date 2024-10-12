import React, { useState } from 'react';
import profilePicture from './imgProfile/OthmaneAzzaf.jpg'; // Othmane Azzaf's profile picture

const TripperProfile = () => {
  // State variables to manage post type, content, quests, and wallet visibility
  const [postType, setPostType] = useState('status');
  const [postContent, setPostContent] = useState('');
  const [walletHistoryVisible, setWalletHistoryVisible] = useState(false);

  // Sample data for quests and recent rewards
  const quests = [
    { title: 'Support Local Artisans', description: 'Share your experience at a local artisan market in Casablanca. Earn 500 WER!', progress: 80 },
    { title: 'Eco-Friendly Traveler', description: 'Join a community beach cleanup. Share a video or photos and earn 300 WER!', progress: 50 },
  ];

  const recentRewards = [
    { title: 'Completed Quest: Eco-Friendly Traveler', amount: 300 },
    { title: 'New Connection Reward', amount: 100 },
  ];

  const achievements = [
    { name: 'Local Guide', imageUrl: 'https://via.placeholder.com/50', description: 'Guided 10+ trippers through your city.' },
    { name: 'Eco-Warrior', imageUrl: 'https://via.placeholder.com/50', description: 'Completed 5 environmental initiatives.' },
    { name: 'Top Tripper', imageUrl: 'https://via.placeholder.com/50', description: 'Traveled to 30+ destinations.' },
  ];

  // Handle the post type change (status, photo, or reel)
  const handlePostTypeChange = (type) => {
    setPostType(type);
    setPostContent(''); // Reset the content when changing the post type
  };

  // Handle the post content change (text input)
  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  // Handle the post submission (status, photo, or reel)
  const handlePostSubmit = () => {
    alert(`Posted a ${postType} with content: ${postContent}`);
    setPostContent(''); // Clear the post content after submission
  };

  // Toggle the wallet history modal visibility
  const toggleWalletHistory = () => {
    setWalletHistoryVisible(!walletHistoryVisible);
  };

  // Inline styles for the component
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
    questContainer: {
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
    },
    achievementContainer: {
      backgroundColor: '#333',
      padding: '16px',
      borderRadius: '8px',
      margin: '20px 0',
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
  };

  return (
    <div style={styles.container}> 
      {/* Header Section */}
      <div style={styles.header}>
        <img src={profilePicture} alt="Othmane Azzaf" style={styles.profileImage} />
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
          <div style={styles.modalOverlay} onClick={toggleWalletHistory}></div>
          <div style={styles.walletModal}>
            <h3>Wallet Transaction History</h3>
            <ul>
              <li>+500 WER - Completed Quest: Support Local Artisans</li>
              <li>-200 WER - Purchased Local Merchandise</li>
              <li>+300 WER - Eco-Friendly Traveler Reward</li>
            </ul>
            <button style={styles.closeModalButton} onClick={toggleWalletHistory}>
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
          I’m Othmane Azzaf, a passionate traveler and local guide from Casablanca. I love sharing the beauty of Morocco’s hidden gems and cultural experiences with the Wesafar community. I believe in connecting with people through authentic experiences and promoting responsible tourism.
        </p>
      </div>

      {/* Achievements Section */}
      <div style={styles.achievementContainer}>
        <h3 style={styles.questTitle}>Achievements</h3>
        {achievements.map((achievement, index) => (
          <div key={index} style={styles.achievementItem}>
            <img src={achievement.imageUrl} alt={achievement.name} style={styles.achievementImage} />
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
              <div style={styles.questProgressBar(quest.progress)}></div>
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

      {/* Create Post Section */}
      <div style={styles.questContainer}>
        <h3 style={styles.questTitle}>Create a New Post</h3>
        <div style={styles.postOptions}>
          <button style={styles.postButton} onClick={() => handlePostTypeChange('status')}>
            Status
          </button>
          <button style={styles.postButton} onClick={() => handlePostTypeChange('photo')}>
            Photo
          </button>
          <button style={styles.postButton} onClick={() => handlePostTypeChange('reel')}>
            Reel Video
          </button>
        </div>
        {postType === 'status' && (
          <textarea
            style={styles.postTextArea}
            placeholder="Share your thoughts..."
            value={postContent}
            onChange={handlePostContentChange}
          ></textarea>
        )}
        {postType === 'photo' && (
          <textarea
            style={styles.postTextArea}
            placeholder="Share a photo URL..."
            value={postContent}
            onChange={handlePostContentChange}
          ></textarea>
        )}
        {postType === 'reel' && (
          <textarea
            style={styles.postTextArea}
            placeholder="Share a reel video URL..."
            value={postContent}
            onChange={handlePostContentChange}
          ></textarea>
        )}
        <button style={styles.postSubmitButton} onClick={handlePostSubmit}>
          Post {postType}
        </button>
      </div>
    </div>
  );
};

export default TripperProfile;
