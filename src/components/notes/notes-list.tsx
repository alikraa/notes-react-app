import { useAppSelector } from '../../store/hooks.ts';
import { RootState } from '../../store/store.ts';
import { Note } from './note.tsx';
import './notes.scss';

export function NotesList({ handleClick }) {
  const { notes, searchValue } = useAppSelector(
    (state: RootState) => state.notesData
  );

  return (
    <div className="notes__notes-list">
      {notes
        .filter(
          (item) =>
            item.noteName.toLowerCase().includes(searchValue) ||
            item.noteText.toLowerCase().includes(searchValue)
        )
        .map((item) => (
          <Note key={item.noteId} note={item} handleClick={handleClick} />
        ))}
    </div>
  );
}
