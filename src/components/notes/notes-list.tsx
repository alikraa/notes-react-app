import { Note } from './note.tsx';
import './notes.scss';

export function NotesList() {
  const colors = [
    { id: 1, name: '#F8A09F' },
    { id: 2, name: '#8158B7' },
    { id: 3, name: '#F57F49' },
    { id: 4, name: '#BED636' },
    { id: 5, name: '#5BC8AF' },
  ];
  return (
    <div className="notes__notes-list">
      {colors.map((item) => (
        <Note key={item.id} color={item.name} />
      ))}
    </div>
  );
}
