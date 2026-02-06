const AddEntryButton = ({ onOpenAddModal, modalFlag }) => {

  return (
    <button
      onClick={onOpenAddModal}
      className={modalFlag ? 'btn btn-primary text-black dark:text-white active' : 'text-black dark:text-white'}
      disabled={modalFlag}
    >
      {modalFlag ? "Modal Open" : "Add New Entry"}
    </button>
  );
};

export default AddEntryButton;