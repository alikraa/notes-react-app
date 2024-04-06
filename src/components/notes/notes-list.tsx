import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks.ts';
import { RootState } from '../../store/store.ts';
import { Note } from './note.tsx';
import { ModalWindowAction } from '../../ts/types.ts';
import './notes.scss';

export function NotesList({ handleClick }: ModalWindowAction) {
  const { notes, favoriteNotes, isFavorite, searchValue } = useAppSelector(
    (state: RootState) => state.notesData
  );

  const [currentList, setCurrentList] = useState(notes);

  useEffect(() => {
    const list = isFavorite ? favoriteNotes : notes;
    setCurrentList(list);
  }, [favoriteNotes, isFavorite, notes]);

  return (
    <div className="notes-list">
      {currentList.length !== 0 ? (
        currentList
          .filter(
            (item) =>
              item.noteName.toLowerCase().includes(searchValue) ||
              item.noteText.toLowerCase().includes(searchValue)
          )
          .map((item) => (
            <Note key={item.noteId} note={item} handleClick={handleClick} />
          ))
      ) : (
        <h2 className="message">Пусто :(</h2>
      )}
    </div>
  );
}
