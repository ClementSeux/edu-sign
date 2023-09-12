import axios from 'axios';
import { useState, useEffect } from 'react';



export default function Login({handleTokenReception}) {

  const getToken = async () => {
    await axios
    .get('http://localhost:8000/token')
    .then((response) => {
      console.log('token reçu', response.data.token);
      return(response.data.token);
    });
  }

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

  useEffect( () => {

    getToken().then((token) =>
    handleTokenReception(token))
  }, []);


  return (
    <>
      <h2>Login</h2>
      <ProfilDropDown />
      <AuthButton />
    </>
  );
}
