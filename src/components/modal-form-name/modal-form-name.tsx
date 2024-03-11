import React, { useState } from 'react';
import { setUserName } from '../../ts/storage.ts';
import { ModalWindowAction } from '../../ts/types.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { setNameOfUser } from '../../store/notes-slice.ts';
import './modal-form-name.scss';

export function ModalFormName({ handleClick }: ModalWindowAction) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');

  const saveUserName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUserName(name);
    dispatch(setNameOfUser(name));
    handleClick();
  };

  return (
    <form className="modal-form-name" onSubmit={saveUserName}>
      <input
        type="text"
        className="modal-form-name__input"
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit" className="modal-form-name__button">
        Сохранить и войти
      </button>
    </form>
  );
}
