import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpenReader,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function Header() {
  const [token, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});
 

  return (
    <header>
      {token ? (
        <>
          {/* <p>{user.firstname user.name}</p> */}
          <FontAwesomeIcon className="icon-check__true" icon={faCircleCheck} />
          <div className="icon-book__alertTrue">
          <p >{user.firstname + " " +user.name}</p>
          <p >Déconnexion </p>
          </div>
          
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
        }}
      >
        <FontAwesomeIcon className="icon-book" icon={faBookOpenReader} />
      </button>
      <h1>Edu-sign</h1>
    </header>
  );
}
