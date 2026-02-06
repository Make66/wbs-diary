import AddEntryButton from "./AddEntryButton";
import reactLogo from "../assets/react.svg";

const Header = ({ onOpenAddModal, modalFlag }) => {
  return (
    <header className="h-16 bg-blue-600 text-white flex flex-row items-center px-4 sm:px-6 lg:px-8">
      <a className="basis-54" href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <div className="basis-40 text-xl font-bold">My Daily Diary</div>
      <div className="basis-2xl">
        <AddEntryButton onOpenAddModal={onOpenAddModal} modalFlag={modalFlag} />
      </div>
    </header>
  );
};

export default Header;