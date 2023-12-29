import { IconContext } from 'react-icons';
import { FaStar, FaPen } from 'react-icons/fa6';
import './notes.scss';

export function Note({ color }) {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <h3 className="note-name">Без названия</h3>
      <button
        className="button-favorite"
        type="button"
        aria-label="Favorite Notes"
      >
        <IconContext.Provider value={{ className: 'star-icon', size: '1.5em' }}>
          <FaStar />
        </IconContext.Provider>
      </button>
      <div className="note-text">Текст заметки</div>
      <span className="note-date">Дата</span>
      <button className="edit-note" type="button" aria-label="Edit Note">
        <IconContext.Provider value={{ className: 'pen-icon', size: '1.2em' }}>
          <FaPen />
        </IconContext.Provider>
      </button>
    </div>
  );
}
