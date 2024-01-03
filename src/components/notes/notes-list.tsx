import { Note } from './note.tsx';
import './notes.scss';

export function NotesList({ notes, handleClick, setNoteId }) {
  return (
    <div className="notes__notes-list">
      {notes.map((item) => (
        <Note
          key={item.id}
          note={item}
          handleClick={handleClick}
          setNoteId={setNoteId}
        />
      ))}
    </div>
  );
}
