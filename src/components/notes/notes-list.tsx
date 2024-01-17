import { Note } from './note.tsx';
import './notes.scss';

export function NotesList({ notes, handleClick, setCurrentNoteId }) {
  return (
    <div className="notes__notes-list">
      {notes.map((item) => (
        <Note
          key={item.noteId}
          note={item}
          handleClick={handleClick}
          setCurrentNoteId={setCurrentNoteId}
        />
      ))}
    </div>
  );
}
