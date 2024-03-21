import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import { NoteDetails } from '../components/notes/note-details.tsx';
import { AppContent } from '../components/app-content/app-content.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AppContent />,
      },
      {
        path: '/notes/:noteId',
        element: <NoteDetails />,
      },
    ],
  },
]);
