import { IconContext } from 'react-icons';
import { FaStar, FaPen } from 'react-icons/fa6';
import './notes.scss';

export function Note({ note, handleClick, setCurrentNoteId }) {
  const { id, colorName, noteName, noteText, noteDate, isFavorites, isEdit } =
    note;

  const editClick = () => {
    setCurrentNoteId(id);
    handleClick();
  };

  return (
    <div className="note" style={{ backgroundColor: colorName }}>
      <h3 className="note-name">{noteName}</h3>
      {isFavorites ? (
        <button
          className="button-favorite"
          type="button"
          aria-label="Favorite Notes"
        >
          <IconContext.Provider
            value={{ className: 'star-icon', size: '1.5em' }}
          >
            <FaStar />
          </IconContext.Provider>
        </button>
      ) : (
        ''
      )}
      <div className="note-text">{noteText}</div>
      <span className="note-date">{noteDate}</span>
      <button
        className="edit-note"
        type="button"
        aria-label="Edit Note"
        onClick={editClick}
      >
        <IconContext.Provider value={{ className: 'pen-icon', size: '1.2em' }}>
          <FaPen />
        </IconContext.Provider>
      </button>
    </div>
  );
}
