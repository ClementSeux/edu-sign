import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpenReader,
  faCircleCheck,
  faCircleXmark,
  faFeather,
} from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function Header() {
  const [token, setToken] = useLocalStorage('token', null);
  return (
    <header>
      <div className="branding">
        <h1>Edusign</h1>
        <FontAwesomeIcon className="branding-icon" icon={faFeather} />
      </div>

      <div className="status-log">
        <button
          onClick={() => {
            window.localStorage.clear();
            window.location.reload();
          }}
        >
          <FontAwesomeIcon className="icon-book" icon={faBookOpenReader} />
          {token ? (
            <div className="parent">
              <div className="enfant">
                <p className="icon-book__alertTrue">Déconnexion</p>
                <FontAwesomeIcon
                  className="icon-check__true"
                  icon={faCircleCheck}
                />
              </div>
            </div>
          ) : (
            <div className="parent">
              <div className="enfant">
                <p className="icon-book__alertFalse">Connexion</p>
              </div>
              <div className="enfant">
                <FontAwesomeIcon
                  className="icon-check__false"
                  icon={faCircleXmark}
                />
              </div>
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
