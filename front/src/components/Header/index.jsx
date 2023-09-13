import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <FontAwesomeIcon className="icon" icon={faBookOpenReader} />
      </Link>
      <h1>Edu-sign</h1>
    </header>
  );
}
