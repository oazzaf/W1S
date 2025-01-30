import React from "react";

const QuestWERBalance = ({ werBalance }) => {
  return (
    <div className="p-5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center rounded-lg shadow-lg mb-6">
      <h3 className="text-lg font-semibold">💰 Available WER Balance</h3>
      <p className="text-4xl font-bold">{werBalance.toLocaleString()} WER</p>
    </div>
  );
};

export default QuestWERBalance;