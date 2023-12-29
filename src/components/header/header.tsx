import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import './header.scss';

export function Header() {
  return (
    <header className="notes__header">
      <form className="notes__header-form">
        <IconContext.Provider value={{ className: 'search-icon' }}>
          <RiSearchLine />
        </IconContext.Provider>
        <input type="search" className="form-input" placeholder="Поиск" />
        <button type="submit" className="form-button">
          Искать!
        </button>
      </form>
      <h1 className="notes__header-greetings">Привет, userName!</h1>
    </header>
  );
}
