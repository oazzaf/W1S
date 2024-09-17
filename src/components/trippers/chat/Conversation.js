import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdSend } from 'react-icons/md'; // Send icon for the send button

const Conversation = ({ conversation, onBackToList }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const newMsg = {
      id: conversation.messages.length + 1,
      text: newMessage,
      timeAgo: 'Just now',
      sent: false,
    };
    conversation.messages.push(newMsg);
    setNewMessage('');
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return <span className="ml-2 text-xs text-green-400">Active</span>;
      case 'inactive':
        return <span className="ml-2 text-xs text-red-400">Inactive</span>;
      case 'onTrip':
        return <span className="ml-2 text-xs text-yellow-400">On Trip</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-3 flex flex-col h-full justify-between bg-gradient-to-b from-[#131313] to-[#1f1f23]">
      {/* Header Section */}
      <div className="flex items-center mb-4 bg-[#2a2a2e] p-3 rounded-lg shadow-lg">
        <button
          onClick={onBackToList}
          className="lg:hidden text-gray-300 bg-gray-800 p-2 rounded-full mr-3 hover:bg-gray-600 transition-all duration-300"
        >
          <FaArrowLeft />
        </button>
        <img
          src={conversation.profileImage}
          alt={conversation.name}
          className="w-12 h-12 rounded-full border border-gray-400 shadow-lg mr-3"
        />
        <div className="block">
          <h2 className="text-lg font-bold text-gray-100 tracking-wide">
            {conversation.name}
          </h2>
          {getStatusText(conversation.status)}
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-grow mb-4 max-h-[60vh] overflow-y-auto bg-[#1f1f23] p-3 rounded-xl shadow-md space-y-2">
        {conversation.messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-1 ${
              message.sent ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`rounded-lg p-3 text-sm shadow-lg max-w-[70%] ${
                message.sent
                  ? 'bg-gradient-to-r from-[#ff6a5c] to-[#d93775] text-white'
                  : 'bg-[#2c2c2e] text-gray-300'
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-gray-400 mt-1">{message.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center bg-[#2a2a2e] p-2 rounded-full shadow-md relative">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow bg-transparent px-4 py-2 text-sm text-gray-200 outline-none rounded-full focus:ring-2 focus:ring-[#ff6a5c]"
        />
        <button
          onClick={handleSendMessage}
          className="bg-gradient-to-r from-[#ff6a5c] to-[#d93775] p-3 rounded-full text-white shadow-md absolute right-2 hover:scale-105 transition-all"
        >
          <MdSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default Conversation;
