import EntryForm from "./EntryForm";
import { useEffect, useRef } from "react";

const AddEntryModal = ({ isOpen, onClose, entries, setEntries }) => {
  const openModal = useRef(null);

  useEffect(() => {
  if (isOpen) {
    openModal.current?.showModal();
  } else {
    openModal.current?.close();
  }
}, [isOpen]);

  return (
    <>
      <dialog ref={openModal} className="modal" onClose={onClose}>
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <EntryForm entries={entries} setEntries={setEntries} />
          </div>
          <button
            className="absolute right-2 top-2"
            onClick={onClose}
            aria-label="Close"
          >
            X
          </button>
        </div>
      </dialog>
    </>
  );
};

export default AddEntryModal;
