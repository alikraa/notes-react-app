import { useState } from 'react';
import { Header } from './components/header/header.tsx';
import { Sidebar } from './components/sidebar/sidebar.tsx';
import { NotesList } from './components/notes/notes-list.tsx';
import { notesData } from './ts/notes-data.ts';
import './style.scss';

function App() {
  const [notes, setNotes] = useState(notesData);

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
