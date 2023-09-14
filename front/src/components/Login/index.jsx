/****** Retrieving information via API ******/

import axios from 'axios';
import { useState, useEffect } from 'react';
import BACK_HOST from '../../../ENV.js';
import { Carousel } from '../index.js';

export default function Login({ handleTokenReception }) {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    // Utilisez une fonction séparée pour effectuer l'appel API dans useEffect
    const fetchData = async () => {
      setAPIState({ ...APIState, loading: true });
      try {
        const response = await fetch(BACK_HOST + '/users');
        console.log(response);
        if (!response.ok) {
          console.log(`500`);
          throw new Error('Server Error');
        }
        const data = await response.json();
        console.log(data);
        setTimeout(() => {
          setAPIState({ loading: false, error: false, data });
        }, 1000);
      } catch (error) {
        setAPIState({ loading: false, error: true, data: undefined });
        console.log(`404`);
      }
    };

    fetchData();
  }, []);

  const getToken = async () => {
    let token = await axios.get(BACK_HOST + '/?id=' + '5').then((response) => {
      console.log('token reçu', response.data.token);
      return response.data.token;
    });
    return token;
  };

  const [choix, setChoix] = useState('choix1'); // Par défaut, vous pouvez sélectionner une option

  const handleChoixChange = (e) => {
    setChoix(e.target.value);
  };

  const authentificate = () => {
    getToken().then((token) => {
      handleTokenReception(token);
      console.log('login component sending token', token);
    });
  };

  return (
    <main>
      <>
        <Carousel />
      </>
      {/* Afficher l'état de chargement ou des erreurs */}
      {APIState.loading ? (
        <p>Loading...</p>
      ) : APIState.error ? (
        <p> Impossible de retrouver vos informations</p>
      ) : (
        <>
          <label htmlFor="choix">
            Connectez vous à votre profil enseignant :
          </label>
          <select id="choix" value={choix} onChange={handleChoixChange}>
            <option value="choix1">Enseignants</option>
            <option value="choix2">Albus Dumbledore</option>
            <option value="choix3">Minerva McGonagall</option>
            <option value="choix4">Severus Rogue</option>
          </select>
          <button onClick={authentificate}>Authentification</button>
        </>
      )}
    </main>
  );
}
