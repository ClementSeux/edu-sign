import axios from 'axios';
import { useState } from 'react';

/****** Retrieving information via API ******/

axios
  .get('http://localhost:8000/example')
  .then((response) => console.log('data', response));

/******* DROPDOWN  *******/

function ProfilDropDown() {
  const [choix, setChoix] = useState('choix1'); // Par défaut, vous pouvez sélectionner une option

  const handleChoixChange = (e) => {
    setChoix(e.target.value);
  };
  return (
    <div>
      <label htmlFor="choix">Connectez vous à votre profil enseignant :</label>
      <select id="choix" value={choix} onChange={handleChoixChange}>
        <option value="choix1">Enseignants</option>
        <option value="choix2">Albus Dumbledore</option>
        <option value="choix3">Minerva McGonagall</option>
        <option value="choix4">Severus Rogue</option>
      </select>
    </div>
  );
}

/***** AUTHENTIFACTION BUTTON ******/

function AuthButton() {
    return(
        <button>Authentification</button>
    )
}

export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <ProfilDropDown />
      <AuthButton />
    </>
  );
}
