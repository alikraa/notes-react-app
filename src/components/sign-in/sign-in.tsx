import './sign-in.scss';

export function SignIn({ handleClick }) {
  return (
    <div className="sign-in">
      <button type="button" className="button" onClick={handleClick}>
        Войти
      </button>
    </div>
  );
}
