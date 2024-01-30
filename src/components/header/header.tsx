import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import { useAppDispatch } from '../../store/hooks.ts';
import { setSearchValue } from '../../store/notes-slice.ts';
import './header.scss';

export function Header() {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setSearchValue(value));
  };

  return (
    <header className="notes__header">
      <form className="notes__header-form" onSubmit={handleSubmit}>
        <IconContext.Provider value={{ className: 'search-icon' }}>
          <RiSearchLine />
        </IconContext.Provider>
        <input
          type="search"
          className="form-input"
          placeholder="Поиск"
          onChange={(event) => {
            setValue(event.target.value.toLowerCase());
            dispatch(setSearchValue(event.target.value.toLowerCase()));
          }}
        />
        <button type="submit" className="form-button">
          Искать!
        </button>
      </form>
      <h1 className="notes__header-greetings">Привет, userName!</h1>
    </header>
  );
}
