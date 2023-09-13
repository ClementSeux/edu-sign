import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpenReader,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function Header() {
  const [token, setToken] = useLocalStorage('token', null);
  return (
    <header>
      {token ? (
        <FontAwesomeIcon className="icon-check__true" icon={faCircleCheck} />
      ) : (
        <FontAwesomeIcon className="icon-check__false" icon={faCircleXmark} />
      )}
      <button
        onClick={() => {
          window.localStorage.clear();
          window.location.reload();
        }}
      >
        <FontAwesomeIcon className="icon-book" icon={faBookOpenReader} />
      </button>
      <h1>Edu-sign</h1>
    </header>
  );
}
