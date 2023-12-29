import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa6';
import './sidebar.scss';

export function Sidebar() {
  const [openColors, setOpenColors] = useState(true);

  return (
    <div className="notes__color-buttons">
      <h2 className="app-name">Notes</h2>
      <button
        className="button-favorite"
        type="button"
        aria-label="Favorite Notes"
      >
        <IconContext.Provider value={{ className: 'star-icon', size: '1.5em' }}>
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
  );
}
