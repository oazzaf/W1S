import React from "react";

const QuestMediaUpload = ({ questData, updateQuestData }) => {
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    updateQuestData("media", [...questData.media, ...files]);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">Upload Media</label>
      <input type="file" multiple accept="image/*,video/*" onChange={handleFileUpload} />
      <div className="mt-2 flex flex-wrap">
        {questData.media.map((file, index) => (
          <img key={index} src={URL.createObjectURL(file)} alt="Quest media" className="h-16 w-16 object-cover m-1" />
        ))}
      </div>
    </div>
  );
};

export default QuestMediaUpload;