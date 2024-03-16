import { useAppSelector } from '../../store/hooks.ts';
import { RootState } from '../../store/store.ts';
import './error.scss';

export function Error() {
  const { error } = useAppSelector((state: RootState) => state.notesData);

  return (
    <h2 className="error-message">Что-то пошло не так: {String(error)}</h2>
  );
}
