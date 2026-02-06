import AddEntryButton from "./components/AddEntryButton";

import "./App.css";
import { useState } from "react";
// import { useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";
import Navigation from "./components/Navigation";


const App = () => {
  const [entries, setEntries] = useState([]);
  // const [selectedEntry, setSelectedEntry] = useState(null);
  // const [modalRef, setModalRef] = useState(null);
  const [modalFlag, setModalFlag] = useState(false);
  
  return (
    <div className="flex flex-col h-screen w-full">
      <Header onOpenAddModal={() => setModalFlag(true)} modalFlag={modalFlag} />

      <main className="flex flex-col md:flex-row grow overflow-hidden w-full">
        <aside className="w-full md:w-48 lg:w-64 xl:w-72 bg-gray-800 text-white p-4 overflow-y-auto">
          <Navigation />
        </aside>
        <section className="grow p-4 sm:p-6 lg:p-8 overflow-y-auto bg-gray-50 w-full">
          <h2 className="text-2xl font-bold mb-4">Diary area</h2>
          <AddEntryModal
            isOpen={modalFlag}
            onClose={() => setModalFlag(false)}
            entries={entries}
            setEntries={setEntries}
          />
        </section>
      </main>

      <footer className="h-12 bg-gray-800 text-white flex items-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm">Footer Content</p>
      </footer>
    </div>
  );
};

export default App;