import React from 'react';

const ContentShowcase = () => {
  const posts = [
    { title: 'Camel Ride Experience', views: '12.4K', interactions: '4.8K', date: '2024-12-29' },
    { title: 'Desert Safari Adventure', views: '15.6K', interactions: '6.1K', date: '2024-12-28' },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#222222] p-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
        Content Showcase
      </h2>
      <ul className="space-y-8">
        {posts.map((post, index) => (
          <li
            key={index}
            className="p-6 bg-gradient-to-r from-[#333333] via-gray-800 to-[#333333] rounded-lg shadow-md hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <h3 className="text-xl font-bold text-pink-500">{post.title}</h3>
            <p className="mt-4 text-gray-300">Views: {post.views}</p>
            <p className="text-gray-300">Interactions: {post.interactions}</p>
            <p className="mt-4 text-sm text-gray-500">Date: {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentShowcase;