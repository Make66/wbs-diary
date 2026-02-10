import React from "react";
import { useEffect, useRef, useCallback } from "react";
import EntryDetails from "./EntryDetails";

const ViewEntryModal = ({ entry, entries, onSelectEntry, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (entry) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [entry]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!entry || !entries.length) return;
      const index = entries.indexOf(entry);
      if (e.key === "ArrowLeft" && index > 0) {
        onSelectEntry(entries[index - 1]);
      } else if (e.key === "ArrowRight" && index < entries.length - 1) {
        onSelectEntry(entries[index + 1]);
      }
    },
    [entry, entries, onSelectEntry]
  );

  useEffect(() => {
    if (entry) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [entry, handleKeyDown]);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      <div className="modal-box relative w-11/12 max-w-full">
        {entry && <EntryDetails entry={entry} />}
        <button
          className="absolute right-2 top-2"
          onClick={onClose}
          tabIndex={-1}
          aria-label="Close"
        >
          X
        </button>
      </div>
    </dialog>
  );
};

export default ViewEntryModal;
