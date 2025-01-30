import React, { useState } from "react";
import QuestWERBalance from "./QuestWERBalance";
import QuestForm from "./QuestForm";
import QuestMediaUpload from "./QuestMediaUpload";
import QuestRewards from "./QuestRewards";
import QuestPreview from "./QuestPreview";
import QuestProgress from "./QuestProgress";

const PartnerQuestCreator = () => {
  // Simulated WER balance (should be fetched from API)
  const [werBalance] = useState(5000); 
  const [questData, setQuestData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    rewards: 0,
    media: [],
    expiration: "",
  });

  const updateQuestData = (field, value) => {
    setQuestData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900/50 backdrop-blur-lg shadow-lg rounded-xl border border-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">🚀 Create a Futuristic Quest</h2>

      <QuestWERBalance werBalance={werBalance} />
      <QuestProgress questData={questData} />

      <div className="space-y-6">
        <QuestForm questData={questData} updateQuestData={updateQuestData} />
        <QuestMediaUpload questData={questData} updateQuestData={updateQuestData} />
        <QuestRewards questData={questData} updateQuestData={updateQuestData} werBalance={werBalance} />
        <QuestPreview questData={questData} />
      </div>

      <button
        className={`mt-6 w-full py-3 text-lg font-semibold rounded-lg transition ${
          questData.rewards > werBalance ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={questData.rewards > werBalance}
        onClick={() => console.log("Quest Published:", questData)}
      >
        {questData.rewards > werBalance ? "⚠️ Insufficient WER" : "🚀 Publish Quest"}
      </button>
    </div>
  );
};

export default PartnerQuestCreator;