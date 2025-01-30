import React from 'react';

const MetricsDashboard = () => {
  const metrics = [
    { title: 'Total Reach', value: '24.5K', trend: '+12%' },
    { title: 'Interactions', value: '8.9K', trend: '+18%' },
    { title: 'Revenue Earned', value: '12,345 WER', trend: '+5%' },
    { title: 'New Followers', value: '3.2K', trend: '+22%' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#222222] p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
        Metrics Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-[#333333] via-gray-800 to-[#333333] rounded-lg shadow-md hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <h3 className="text-xl font-bold text-blue-400">{metric.title}</h3>
            <p className="mt-4 text-2xl font-extrabold">{metric.value}</p>
            <p className="mt-2 text-sm text-green-400">{metric.trend}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsDashboard;