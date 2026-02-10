import React from "react";
import EntryCard from "./EntryCard";

const EntryList = ({ entries, onSelectEntry }) => {
  const sorted = [...entries].reverse();

  if (sorted.length === 0) {
    return <p className="text-gray-400 italic">No entries yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {sorted.map((entry, index) => (
        <EntryCard key={index} entry={entry} onClick={() => onSelectEntry(entry)} />
      ))}
    </div>
  );
};

export default EntryList;
