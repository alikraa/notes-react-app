import React, { useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { setSearchValue } from '../../store/notes-slice.ts';
import { RootState } from '../../store/store.ts';
import './header.scss';

export function Header() {
  const { userName } = useAppSelector((state: RootState) => state.notesData);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const searchIconStyle = useMemo(() => ({ className: 'search-icon' }), []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setSearchValue(value));
  };

  return (
    <header className="notes-header">
      <form className="notes-header__form" onSubmit={handleSubmit}>
        <IconContext.Provider value={searchIconStyle}>
          <RiSearchLine />
        </IconContext.Provider>
        <input
          type="search"
          className="notes-header__form__input"
          placeholder="Поиск"
          onChange={(event) => {
            setValue(event.target.value.toLowerCase());
            dispatch(setSearchValue(event.target.value.toLowerCase()));
          }}
        />
        <button type="submit" className="notes-header__form__button">
          Искать!
        </button>
      </form>
      <h1 className="notes-header__greetings">
        {userName ? `Привет, ${userName}!` : 'Привет!'}
      </h1>
    </header>
  );
}
