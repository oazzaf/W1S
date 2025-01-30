import React from 'react';

const UpcomingEvents = () => {
  const events = [
    { title: 'Camel Ride Event', date: '2024-12-31', participants: '120' },
    { title: 'Desert Adventure Meetup', date: '2024-12-29', participants: '200' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#222222] p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
        Upcoming Events
      </h2>
      <ul className="space-y-8">
        {events.map((event, index) => (
          <li
            key={index}
            className="p-6 bg-[#333333] rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="mt-4 text-gray-300">Date: {event.date}</p>
            <p className="text-gray-300">Participants: {event.participants}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;