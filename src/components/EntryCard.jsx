import React from "react";

const EntryCard = ({ entry, onClick }) => {
  return (
    <div className="card bg-base-100 shadow-md cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <figure>
        <img src={entry.image} alt={entry.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{entry.title}</h3>
        <p className="text-sm text-gray-500">{new Date(entry.date).toLocaleDateString("de-DE")}</p>
        <p className="line-clamp-3">{entry.content}</p>
      </div>
    </div>
  );
};

export default EntryCard;
