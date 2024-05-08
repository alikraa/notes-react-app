/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineClose } from 'react-icons/md';
import { ModalWindowProps } from '../../ts/types.ts';
import './modal-window.scss';

export function ModalWindow({
  hidden,
  handleClick,
  children,
}: ModalWindowProps) {
  const closeIconStyle = useMemo(() => ({ size: '1.5em' }), []);

  return (
    <div
      className={hidden ? 'modal-window' : 'modal-window modal-window_active'}
      onClick={handleClick}
    >
      <div
        className={
          hidden
            ? 'modal-window__content'
            : 'modal-window__content modal-window__content_active'
        }
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-window__button"
          aria-label="Close"
          onClick={handleClick}
        >
          <IconContext.Provider value={closeIconStyle}>
            <MdOutlineClose />
          </IconContext.Provider>
        </button>
        {children}
      </div>
    </div>
  );
}
