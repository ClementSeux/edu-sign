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
        <>
          <FontAwesomeIcon className="icon-check__true" icon={faCircleCheck} />
          <p className="icon-book__alertTrue">Déconnexion</p>
        </>
      ) : (
        <>
          <FontAwesomeIcon className="icon-check__false" icon={faCircleXmark} />
          <p className="icon-book__alertFalse">Connexion</p>
        </>
      )}
      <button
        onClick={() => {
          window.localStorage.clear();
          window.location.reload();
          window.alert('Utilisateur déconnecté');
        }}
      >
        <FontAwesomeIcon className="icon-book" icon={faBookOpenReader} />
      </button>
      <h1>Edu-sign</h1>
    </header>
  );
}
