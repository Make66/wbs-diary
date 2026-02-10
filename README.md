# WBS Diary

A personal daily diary web application built with React as a WBS Coding School training project. Users can create, browse, and view diary entries — all persisted locally in the browser.

## Features

- Create diary entries with title, date, image URL, and content
- Entries displayed as cards in a responsive grid, sorted newest-first
- Click a card to view the full entry in a detail modal
- Navigate between entries with keyboard arrow keys
- Form validation ensures all fields are filled before submission
- Data persisted in localStorage — no backend required

## Tech Stack

- **React 19** with Vite 7
- **TailwindCSS 4** with DaisyUI 5
- **localStorage** for data persistence

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone git@github.com:Make66/wbs-diary.git
cd wbs-diary
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── App.jsx                  # Main app component with state management
├── main.jsx                 # React entry point
├── App.css                  # Global styles and Tailwind imports
└── components/
    ├── Header.jsx           # Top navigation bar
    ├── Navigation.jsx       # Sidebar navigation
    ├── EntryList.jsx        # Grid display of entry cards
    ├── EntryCard.jsx        # Individual entry preview card
    ├── AddEntryButton.jsx   # Button to open the add-entry modal
    ├── AddEntryModal.jsx    # Modal wrapper for the entry form
    ├── EntryForm.jsx        # Entry creation form with validation
    ├── ViewEntryModal.jsx   # Detail modal with arrow-key navigation
    └── EntryDetails.jsx     # Full entry display
```
