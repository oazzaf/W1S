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
  const [selectedConvo, setSelectedConvo] = useState(null); 
  const [isConvoView, setIsConvoView] = useState(false);

  const handleSelectConversation = (id) => {
    const conversation = conversationsData.find((convo) => convo.id === id);
    setSelectedConvo(conversation);
    setIsConvoView(true); 
  };

  const handleBackToList = () => {
    setIsConvoView(false);
  };

  return (
    <div className="h-[120vh] bg-[#222222]">
      {/* Navigation */}
      <TripperNav />

      {/* Centered Messages Header */}
      <div className="flex justify-center mt-16 lg:mt-[-0.3rem] mb-[-2rem] lg:mb-[-1.4rem]">
        <h2 className="text-xl font-bold text-white">Messages</h2>
      </div>

      {/* Main layout for Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-[90vh] mt-6 p-4 gap-10">
        <div className={`bg-[#222222] text-white h-[80vh] rounded-lg shadow-lg lg:block ${isConvoView ? 'hidden' : 'block'}`}>
          <ListConvo 
            conversations={conversationsData} 
            onSelectConversation={handleSelectConversation} 
          />
        </div>

        <div className={`bg-[#2c2c2e] text-white h-[80vh] rounded-lg shadow-lg lg:block ${isConvoView ? 'block' : 'hidden'}`}>
          {selectedConvo ? (
            <Conversation 
              conversation={selectedConvo}
              onBackToList={handleBackToList}
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