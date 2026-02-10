import React from "react";

const EntryDetails = ({ entry }) => {
  return (
    <div>
      <figure>
        <img src={entry.image} alt={entry.title} className="w-full max-h-96 object-cover rounded-lg" />
      </figure>
      <h3 className="text-xl font-bold mt-4">{entry.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{new Date(entry.date).toLocaleDateString("de-DE")}</p>
      <p className="mt-4 whitespace-pre-line">{entry.content}</p>
    </div>
  );
};

export default EntryDetails;
