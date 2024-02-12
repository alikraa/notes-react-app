import React, { useState } from 'react';
import './modal-form-name.scss';

export function ModalFormName({ handleClick }) {
  const [name, setName] = useState('');

  const saveUserName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleClick();
  };

  return (
    <form className="modal-form-name" onSubmit={saveUserName}>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button type="submit">Сохранить и войти</button>
    </form>
  );
}
