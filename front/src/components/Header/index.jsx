import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from 'react-router-dom';

export default function Header() {
  const [token, setToken] = useLocalStorage('token', null);
  return (
    <header>
        <FontAwesomeIcon className="icon-book" icon={faBookOpenReader} />
        <FontAwesomeIcon className='icon-check__true' icon={faCircleCheck} />
        <FontAwesomeIcon className='icon-check__false' icon={faCircleXmark} />
        <h1>Edu-sign</h1>
        {token && <p>{token}</p>}
    </header>
  );
}
