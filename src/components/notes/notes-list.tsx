import { Note } from './note.tsx';
import './notes.scss';

export function NotesList({ notes }) {
  return (
    <div className="notes__notes-list">
      {notes.map((item) => (
        <Note key={item.id} note={item} />
      ))}
    </div>
  );
}
