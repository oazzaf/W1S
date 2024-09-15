import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

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
        return <span className="ml-2 text-xs text-green-500">Active</span>;
      case 'inactive':
        return <span className="ml-2 text-xs text-red-500">Inactive</span>;
      case 'onTrip':
        return <span className="ml-2 text-xs text-yellow-500">On Trip</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 flex flex-col h-full justify-between">
      <div className="flex items-center mb-4 bg-[#1f1f23] p-4 rounded-lg shadow-md">
        <button
          onClick={onBackToList}
          className="lg:hidden text-gray-400 bg-gray-700 p-2 rounded-full mr-3"
        >
          <FaArrowLeft />
        </button>
        <img
          src={conversation.profileImage}
          alt={conversation.name}
          className="w-14 h-14 rounded-full border border-gray-300 shadow-sm mr-4"
        />
        <div className="display-block">
          <h2 className="text-xl font-bold text-gray-100">{conversation.name}</h2>
          {getStatusText(conversation.status)}
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-grow mb-4 max-h-[65vh] overflow-y-auto bg-[#1f1f23] p-4 rounded-lg shadow-md">
        {conversation.messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-2 ${message.sent ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`rounded-lg p-3 text-sm ${
                message.sent
                  ? 'bg-gradient-to-r from-[#ff6a5c] to-[#d93775] text-white'
                  : 'bg-gray-200 text-gray-900'
              } max-w-xs shadow-sm`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-gray-400 mt-1">{message.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center bg-[#1f1f23] p-3 rounded-lg shadow-md">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type something..."
          className="flex-grow px-4 py-2 rounded-full bg-gray-700 text-sm text-gray-300 mr-3"
        />
        <button
          onClick={handleSendMessage}
          className="bg-gradient-to-r from-[#ff6a5c] to-[#d93775] p-3 rounded-full text-white shadow-md"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default Conversation;
