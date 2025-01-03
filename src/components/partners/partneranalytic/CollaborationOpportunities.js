import React from 'react';

const CollaborationOpportunities = () => {
  const opportunities = [
    { partner: 'Safari Adventures', details: 'Joint campaign on Safari tours.', status: 'Open' },
    { partner: 'Local Artisans', details: 'Collaborate on souvenir promotions.', status: 'In Progress' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#222222] p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
        Collaboration Opportunities
      </h2>
      <ul className="space-y-8">
        {opportunities.map((opportunity, index) => (
          <li
            key={index}
            className="p-6 bg-[#333333] rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{opportunity.partner}</h3>
            <p className="mt-2 text-gray-300">{opportunity.details}</p>
            <p className="mt-4 text-sm text-green-400">Status: {opportunity.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollaborationOpportunities;