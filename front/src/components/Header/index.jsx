import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from 'react-router-dom';

export default function Header() {
  const [token, setToken] = useLocalStorage('token', null);
  return (
    <header>
      {/* <Link to="/">
        <FontAwesomeIcon className="icon" icon={faBookOpenReader} /> 
      </Link> */}
      <h1>Edu-sign</h1>
      {token && <p>{token}</p>}
    </header>
  );
}
