import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import { FaStar, FaPen } from 'react-icons/fa6';
import './App.scss';

function App() {
  const [openColors, setOpenColors] = useState(true);

  return (
    <div className="container">
      <header className="notes__header">
        <form className="notes__header-form">
          <IconContext.Provider value={{ className: 'search-icon' }}>
            <RiSearchLine />
          </IconContext.Provider>
          <input type="search" className="form-input" placeholder="Поиск" />
          <button type="submit" className="form-button">
            Искать!
          </button>
        </form>
        <h1 className="notes__header-greetings">Привет, userName!</h1>
      </header>

      <div className="notes__color-buttons">
        <h2 className="app-name">Notes</h2>
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
        <button
          type="button"
          className="button-colors"
          onClick={() => setOpenColors(!openColors)}
        >
          +
        </button>
        <div className="colors" hidden={openColors}>
          <span style={{ backgroundColor: '#F8A09F' }} />
          <span style={{ backgroundColor: '#8158B7' }} />
          <span style={{ backgroundColor: '#F57F49' }} />
          <span style={{ backgroundColor: '#BED636' }} />
          <span style={{ backgroundColor: '#5BC8AF' }} />
        </div>
      </div>

      <div className="notes__notes-list">
        <div className="note" style={{ backgroundColor: '#F8A09F' }}>
          <h3 className="note-name">Без названия</h3>
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
          <div className="note-text">Текст заметки</div>
          <span className="note-date">Дата</span>
          <button className="edit-note" type="button" aria-label="Edit Note">
            <IconContext.Provider
              value={{ className: 'pen-icon', size: '1.2em' }}
            >
              <FaPen />
            </IconContext.Provider>
          </button>
        </div>

        <div className="note" style={{ backgroundColor: '#8158B7' }}>
          <h3 className="note-name">Без названия</h3>
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
          <div className="note-text">Текст заметки</div>
          <span className="note-date">Дата</span>
          <button className="edit-note" type="button" aria-label="Edit Note">
            <IconContext.Provider
              value={{ className: 'pen-icon', size: '1.2em' }}
            >
              <FaPen />
            </IconContext.Provider>
          </button>
        </div>

        <div className="note" style={{ backgroundColor: '#F57F49' }}>
          <h3 className="note-name">Без названия</h3>
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
          <div className="note-text">Текст заметки</div>
          <span className="note-date">Дата</span>
          <button className="edit-note" type="button" aria-label="Edit Note">
            <IconContext.Provider
              value={{ className: 'pen-icon', size: '1.2em' }}
            >
              <FaPen />
            </IconContext.Provider>
          </button>
        </div>

        <div className="note" style={{ backgroundColor: '#BED636' }}>
          <h3 className="note-name">Без названия</h3>
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
          <div className="note-text">Текст заметки</div>
          <span className="note-date">Дата</span>
          <button className="edit-note" type="button" aria-label="Edit Note">
            <IconContext.Provider
              value={{ className: 'pen-icon', size: '1.2em' }}
            >
              <FaPen />
            </IconContext.Provider>
          </button>
        </div>

        <div className="note" style={{ backgroundColor: '#5BC8AF' }}>
          <h3 className="note-name">Без названия</h3>
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
          <div className="note-text">Текст заметки</div>
          <span className="note-date">Дата</span>
          <button className="edit-note" type="button" aria-label="Edit Note">
            <IconContext.Provider
              value={{ className: 'pen-icon', size: '1.2em' }}
            >
              <FaPen />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
