import { Header } from './components/header/header.tsx';
import { Sidebar } from './components/sidebar/sidebar.tsx';
import { NotesList } from './components/notes/notes-list.tsx';
import './style.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <NotesList />
    </div>
  );
}

export default App;
