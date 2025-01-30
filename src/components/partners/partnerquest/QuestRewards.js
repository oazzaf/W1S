import React from "react";

const QuestRewards = ({ questData, updateQuestData, werBalance }) => {
  return (
    <div className="p-5 bg-gray-800/70 backdrop-blur-lg text-white rounded-lg shadow-lg">
      <label className="block text-sm font-medium">🎁 Reward (WER Tokens)</label>
      <input
        type="number"
        min="1"
        max={werBalance}
        value={questData.rewards}
        onChange={(e) => updateQuestData("rewards", Math.min(Number(e.target.value), werBalance))}
        className="w-full p-3 border rounded-lg bg-gray-900 text-white"
      />
      <p className="text-sm mt-2 text-gray-400">
        {questData.rewards > werBalance ? "⚠️ Insufficient WER" : `Max: ${werBalance} WER`}
      </p>
    </div>
  );
};

export default QuestRewards;