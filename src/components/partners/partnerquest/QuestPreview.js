import React from "react";

const QuestPreview = ({ questData }) => {
  return (
    <div className="p-4 border rounded mt-4">
      <h3 className="text-xl font-semibold">Quest Preview</h3>
      <p><strong>Title:</strong> {questData.title}</p>
      <p><strong>Description:</strong> {questData.description}</p>
      <p><strong>Category:</strong> {questData.category}</p>
      <p><strong>Location:</strong> {questData.location}</p>
      <p><strong>Reward:</strong> {questData.rewards} WER</p>
      <div className="mt-2 flex">
        {questData.media.map((file, index) => (
          <img key={index} src={URL.createObjectURL(file)} alt="Quest media" className="h-16 w-16 object-cover m-1" />
        ))}
      </div>
    </div>
  );
};

export default QuestPreview;