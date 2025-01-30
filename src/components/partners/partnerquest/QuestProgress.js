import React from "react";

const QuestProgress = ({ questData }) => {
  const stepsCompleted = [
    questData.title && questData.description,
    questData.media.length > 0,
    questData.rewards > 0,
  ].filter(Boolean).length;

  const progressPercentage = (stepsCompleted / 3) * 100;

  return (
    <div className="mb-6">
      <div className="w-full bg-gray-800 h-2 rounded-lg overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-300 text-center mt-2">{stepsCompleted}/3 Steps Completed</p>
    </div>
  );
};

export default QuestProgress;