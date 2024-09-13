import React, { useState } from 'react';
import TripperNav from '../../components/trippers/TripperNav';
import ListConvo from '../../components/trippers/chat/ListConvo';
import Conversation from '../../components/trippers/chat/Conversation';

// Import profile images
import aminaImg from '../../components/trippers/chat/chatimg/Amina.jpg';
import fourSeasonsImg from '../../components/trippers/chat/chatimg/FourSeason.jpg';
import cabestanImg from '../../components/trippers/chat/chatimg/Cabestan.jpg';
import karimImg from '../../components/trippers/chat/chatimg/Karim.jpg';
import hyattImg from '../../components/trippers/chat/chatimg/Hyatt.jpg';
import ricksImg from '../../components/trippers/chat/chatimg/Ricks.jpg';
import fatimaImg from '../../components/trippers/chat/chatimg/Fatima.jpg';

// Simulated data for the list of conversations (mix of people, hotels, and restaurants)
const conversationsData = [
  {
    id: 1,
    name: 'Amina Bensalem',
    lastMessage: 'See you at the event!',
    timeAgo: '52 min ago',
    profileImage: aminaImg,
    status: 'inactive',
    messages: [
      { id: 1, text: 'Looking forward to it!', timeAgo: '1 hour ago', sent: true },
      { id: 2, text: 'I’ll bring the documents you asked for.', timeAgo: '1 hour ago', sent: false },
      { id: 3, text: 'Perfect, thanks a lot!', timeAgo: '2 hours ago', sent: true },
    ],
  },
  {
    id: 2,
    name: 'Four Seasons Hotel Casablanca',
    lastMessage: "Your reservation is confirmed for tomorrow.",
    timeAgo: '2 hours ago',
    profileImage: fourSeasonsImg,
    status: 'inactive',
    messages: [
      { id: 1, text: 'Can you please confirm my booking for tomorrow?', timeAgo: '2 hours ago', sent: false },
      { id: 2, text: 'Yes, your reservation is confirmed. Looking forward to welcoming you.', timeAgo: '1 hour ago', sent: true },
    ],
  },
  {
    id: 3,
    name: 'Le Cabestan Restaurant',
    lastMessage: 'Table reserved for 8 PM.',
    timeAgo: '3 hours ago',
    profileImage: cabestanImg,
    status: 'active',
    messages: [
      { id: 1, text: 'Can I book a table for 8 PM tonight?', timeAgo: '3 hours ago', sent: false },
      { id: 2, text: 'Yes, your table is reserved. Enjoy your evening!', timeAgo: '2 hours ago', sent: true },
    ],
  },
  {
    id: 4,
    name: 'Karim El Fassi',
    lastMessage: 'Got the files, thanks!',
    timeAgo: '4 hours ago',
    profileImage: karimImg,
    status: 'active',
    messages: [
      { id: 1, text: 'Can you send me the updated report?', timeAgo: '4 hours ago', sent: false },
      { id: 2, text: 'Sure, sending it right now.', timeAgo: '3 hours ago', sent: true },
    ],
  },
  {
    id: 5,
    name: 'Hyatt Regency Casablanca',
    lastMessage: 'Room upgrade confirmed for your stay.',
    timeAgo: '5 hours ago',
    profileImage: hyattImg,
    status: 'active',
    messages: [
      { id: 1, text: 'Is there a possibility of upgrading my room?', timeAgo: '5 hours ago', sent: false },
      { id: 2, text: 'Yes, your room has been upgraded. We look forward to your stay.', timeAgo: '4 hours ago', sent: true },
    ],
  },
  {
    id: 6,
    name: "Rick's Café",
    lastMessage: 'Reservation confirmed for 7 PM.',
    timeAgo: '6 hours ago',
    profileImage: ricksImg,
    status: 'onTrip',
    messages: [
      { id: 1, text: 'I’d like to reserve a table for two at 7 PM.', timeAgo: '6 hours ago', sent: false },
      { id: 2, text: 'Your reservation is confirmed. See you soon!', timeAgo: '5 hours ago', sent: true },
    ],
  },
  {
    id: 7,
    name: 'Fatima Zahra Mounir',
    lastMessage: 'I’ll be there in 10 minutes.',
    timeAgo: '7 hours ago',
    profileImage: fatimaImg,
    status: 'inactive',
    messages: [
      { id: 1, text: 'Are you on your way?', timeAgo: '7 hours ago', sent: false },
      { id: 2, text: 'Yes, almost there!', timeAgo: '6 hours ago', sent: true },
    ],
  },
];

const TripperMessages = () => {
  const [selectedConvo, setSelectedConvo] = useState(null); // No default conversation selected
  const [isConvoView, setIsConvoView] = useState(false); // Track if conversation view is active (for small screens)

  // Function to handle selection of a conversation from ListConvo
  const handleSelectConversation = (id) => {
    const conversation = conversationsData.find((convo) => convo.id === id);
    setSelectedConvo(conversation);
    setIsConvoView(true); // Show conversation on mobile view
  };

  // Function to go back to the list of conversations (used on mobile view)
  const handleBackToList = () => {
    setIsConvoView(false);
  };

  return (
    <div className="h-[120vh] bg-[#222222]">
      {/* Navigation */}
      <TripperNav />

      {/* Main layout for Messages with 10vh margin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[90vh] mt-[6vh] lg:mt-[0vh] md:mt-[150vh] p-4 gap-16">
        {/* Left Side - List of Conversations */}
        <div className={`bg-[#222222] text-white h-[80vh] rounded-lg shadow-lg lg:block ${isConvoView ? 'hidden' : 'block'}`}>
          <ListConvo 
            conversations={conversationsData} 
            onSelectConversation={handleSelectConversation} 
          />
        </div>

        {/* Right Side - Selected Conversation */}
        <div className={`bg-[#2c2c2e] text-white h-[73.5vh] rounded-lg shadow-lg lg:block ${isConvoView ? 'block' : 'hidden'}`}>
          {selectedConvo ? (
            <Conversation 
              conversation={selectedConvo}
              onBackToList={handleBackToList} // Passing the function to go back to list
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <p>Select a conversation to view the messages</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripperMessages;
