import React from "react";

const QuestForm = ({ questData, updateQuestData }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">Quest Title</label>
      <input
        type="text"
        value={questData.title}
        onChange={(e) => updateQuestData("title", e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Enter quest title"
      />

      <label className="block text-sm font-medium mt-2">Description</label>
      <textarea
        value={questData.description}
        onChange={(e) => updateQuestData("description", e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Describe the quest"
      />

      <label className="block text-sm font-medium mt-2">Category</label>
      <select
        value={questData.category}
        onChange={(e) => updateQuestData("category", e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select category</option>
        <option value="exploration">Exploration</option>
        <option value="content">Content Creation</option>
        <option value="support">Local Business Support</option>
        <option value="sustainability">Sustainability</option>
      </select>

      <label className="block text-sm font-medium mt-2">Location</label>
      <input
        type="text"
        value={questData.location}
        onChange={(e) => updateQuestData("location", e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Enter location"
      />
    </div>
  );
};

export default QuestForm;