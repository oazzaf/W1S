import React from 'react';

const TripperInsights = () => {
  const insights = [
    { user: 'Tripper123', action: 'Reviewed your Camel Ride package.', date: '2024-12-30' },
    { user: 'Tripper456', action: 'Booked a Desert Safari experience.', date: '2024-12-29' },
    { user: 'Tripper789', action: 'Followed your profile.', date: '2024-12-28' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#222222] p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
        Tripper Insights
      </h2>
      <ul className="space-y-8">
        {insights.map((insight, index) => (
          <li
            key={index}
            className="p-6 bg-[#333333] rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{insight.user}</h3>
            <p className="mt-2 text-gray-300">{insight.action}</p>
            <p className="mt-4 text-sm text-gray-500">{insight.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripperInsights;