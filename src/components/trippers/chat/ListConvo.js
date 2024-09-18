import React from 'react';

const ListConvo = ({ conversations, onSelectConversation }) => {
  return (
    <div className="p-2 space-y-2 overflow-y-auto h-full">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => onSelectConversation(conversation.id)}
          className="bg-[#2c2c2e] p-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition duration-300 flex items-center space-x-2"
        >
          {/* Profile Image */}
          <img
            src={conversation.profileImage}
            alt={conversation.name}
            className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
          />

          {/* Conversation Details */}
          <div className="flex-grow overflow-hidden">
            <div className="flex items-center space-x-2">
              <h4 className="flex-shrink-0 font-semibold text-sm text-gray-200 truncate">{conversation.name}</h4>
              {/* Status Dot next to the name */}
              {conversation.status === 'active' && (
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              )}
              {conversation.status === 'inactive' && (
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              )}
              {conversation.status === 'onTrip' && (
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              )}
            </div>
            <p className="text-xs text-gray-400 truncate">{conversation.lastMessage}</p>
            <span className="text-xs text-gray-500">{conversation.timeAgo}</span>
          </div>
        </div>
      ))}
    </div>
  );
  };

export default ListConvo;
