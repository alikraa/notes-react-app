/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IconContext } from 'react-icons';
import { MdOutlineClose } from 'react-icons/md';
import './modal-window.scss';

export function ModalWindow({ hidden, handleClick, children }) {
  return (
    <div
      className={hidden ? 'modal-window' : 'modal-window window-active'}
      onClick={handleClick}
    >
      <div
        className={
          hidden ? 'content-wrapper' : 'content-wrapper wrapper-active'
        }
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="button close"
          aria-label="Close"
          onClick={handleClick}
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            <MdOutlineClose />
          </IconContext.Provider>
        </button>
        {children}
      </div>
    </div>
  );
}
