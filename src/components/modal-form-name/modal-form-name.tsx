import React, { useState } from 'react';
import { setUserName } from '../../ts/storage.ts';
import { ModalWindowAction } from '../../ts/types.ts';
import './modal-form-name.scss';

export function ModalFormName({ handleClick }: ModalWindowAction) {
  const [name, setName] = useState('');

  const saveUserName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUserName(name);
    handleClick();
  };

  return (
    <form className="modal-form-name" onSubmit={saveUserName}>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button type="submit">Сохранить и войти</button>
    </form>
  );
}
