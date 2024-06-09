import { ModalWindowAction } from '../../ts/types.ts';
import './sign-in.scss';

export function SignIn({ handleClick }: ModalWindowAction) {
  return (
    <div className="sign-in">
      <button
        type="button"
        title="Войти"
        className="sign-in__button"
        onClick={handleClick}
      >
        Войти
      </button>
    </div>
  );
}
