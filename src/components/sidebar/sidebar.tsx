import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa6';
import { colors } from '../../ts/notes-data.ts';
import { RootState } from '../../store/store.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { getFavoriteNotes, setIsFavorite } from '../../store/notes-slice.ts';
import './sidebar.scss';

export function Sidebar({ handleClick }) {
  const dispatch = useAppDispatch();
  const { isFavorite } = useAppSelector((state: RootState) => state.notesData);

  const [openColors, setOpenColors] = useState(true);

  return (
    <div className="notes__color-buttons">
      <h2 className="app-name">Notes</h2>
      <button
        className={isFavorite ? 'button-favorite active' : 'button-favorite'}
        type="button"
        aria-label="Favorite Notes"
        onClick={() => {
          dispatch(setIsFavorite());
          dispatch(getFavoriteNotes());
        }}
      >
        <IconContext.Provider value={{ className: 'star-icon', size: '1.5em' }}>
          <FaStar />
        </IconContext.Provider>
      </button>
      <button
        type="button"
        className={openColors ? 'button-colors' : 'button-colors active'}
        onClick={() => setOpenColors(!openColors)}
      >
        +
      </button>
      <div className="colors" hidden={openColors}>
        {colors.map((item) => (
          <button
            key={item.id}
            type="button"
            className="color"
            aria-label="Color"
            style={{ backgroundColor: `${item.name}` }}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
