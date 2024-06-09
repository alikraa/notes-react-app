import React, { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaStar } from 'react-icons/fa6';
import { PiSignOutBold } from 'react-icons/pi';
import { colors } from '../../ts/notes-data.ts';
import { RootState } from '../../store/store.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import {
  getFavoriteNotes,
  setIsFavorite,
  setNameOfUser,
} from '../../store/notes-slice.ts';
import { deleteUserName, nameKey } from '../../ts/storage.ts';
import './sidebar.scss';

interface SidebarProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Sidebar({ handleClick }: SidebarProps) {
  const dispatch = useAppDispatch();
  const { userName, isFavorite } = useAppSelector(
    (state: RootState) => state.notesData
  );

  const [openColors, setOpenColors] = useState(true);
  const [clickMenu, setClickMenu] = useState(false);

  const starIconStyle = useMemo(
    () => ({ className: 'star-icon', size: '1.5em' }),
    []
  );
  const signOutIconStyle = useMemo(
    () => ({ className: 'sign-out-icon', size: '1.5em' }),
    []
  );

  return (
    <div className="notes-sidebar">
      <h2 className="notes-app-name">Notes</h2>
      <div
        className={
          clickMenu
            ? 'notes-sidebar__buttons notes-sidebar__buttons_active'
            : 'notes-sidebar__buttons'
        }
      >
        <button
          className={
            isFavorite
              ? 'notes-sidebar__favorite-button notes-sidebar__favorite-button_active'
              : 'notes-sidebar__favorite-button'
          }
          type="button"
          aria-label="Favorite Notes"
          title="Избранное"
          onClick={() => {
            dispatch(setIsFavorite());
            dispatch(getFavoriteNotes());
          }}
        >
          <IconContext.Provider value={starIconStyle}>
            <FaStar />
          </IconContext.Provider>
        </button>
        <button
          type="button"
          title="Добавить заметку"
          className={
            openColors
              ? 'notes-sidebar__color-button'
              : 'notes-sidebar__color-button notes-sidebar__color-button_active'
          }
          onClick={() => setOpenColors(!openColors)}
        >
          +
        </button>
        <div className="notes-sidebar__colors" hidden={openColors}>
          {colors.map((item) => (
            <button
              key={item.id}
              type="button"
              className="notes-sidebar__colors-item"
              aria-label="Color"
              style={{ backgroundColor: `${item.name}` }}
              onClick={handleClick}
            />
          ))}
        </div>
        {userName ? (
          <button
            type="button"
            title="Выйти"
            className="notes-sidebar__sign-out-button"
            aria-label="Sign Out"
            onClick={() => {
              deleteUserName(nameKey);
              dispatch(setNameOfUser(''));
            }}
          >
            <IconContext.Provider value={signOutIconStyle}>
              <PiSignOutBold />
            </IconContext.Provider>
          </button>
        ) : (
          ''
        )}
      </div>
      <button
        className={
          clickMenu
            ? 'notes-sidebar__menu-button notes-sidebar__menu-button_active'
            : 'notes-sidebar__menu-button'
        }
        type="button"
        aria-label="Menu"
        onClick={() => setClickMenu(!clickMenu)}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}
