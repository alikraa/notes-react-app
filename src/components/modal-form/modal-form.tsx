import { IconContext } from 'react-icons';
import { MdOutlineClose } from 'react-icons/md';
import './modal-form.scss';

export function ModalForm() {
  return (
    <div className="wrapper">
      <div className="modal-form">
        <button
          type="button"
          className="modal-form__button close"
          aria-label="Close"
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            <MdOutlineClose />
          </IconContext.Provider>
        </button>
        <form className="modal-form__form">
          <input type="text" className="form-input" name="input-field" />
          <textarea className="form-textarea" name="text-field" />
          <button type="submit" className="form-button">
            Сохранить
          </button>
        </form>
        <button type="button" className="modal-form__button delete">
          Удалить заметку
        </button>
      </div>
    </div>
  );
}
