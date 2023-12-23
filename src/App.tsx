import { useState } from 'react';
import './App.scss';

function App() {
  const [openColors, setOpenColors] = useState(true);
  return (
    <div className="container">
      <header className="notes__header">
        <form className="notes__header-form">
          <input type="search" name="" id="" placeholder="Поиск" />
          <button type="submit">Искать!</button>
        </form>
        <h1 className="notes__header-greetings">Привет, userName!</h1>
      </header>

      <div className="notes__color-buttons">
        <h2>Notes</h2>
        <div className="favorite-notes">
          <a href="!#">Favorite</a>
        </div>
        <button type="button" onClick={() => setOpenColors(!openColors)}>
          +
        </button>
        <div className="colors" hidden={openColors}>
          <span style={{ backgroundColor: '#F8A09F' }} />
          <span style={{ backgroundColor: '#8158B7' }} />
          <span style={{ backgroundColor: '#F57F49' }} />
          <span style={{ backgroundColor: '#BED636' }} />
          <span style={{ backgroundColor: '#5bc8af' }} />
        </div>
      </div>

      <div className="notes__notes-list">
        <div className="note">
          <h3 className="note-name">Note Name</h3>
          <div className="note-text">Note Text</div>
          <span className="note-date">Date</span>
          <button className="change-note" type="button">
            ch
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
