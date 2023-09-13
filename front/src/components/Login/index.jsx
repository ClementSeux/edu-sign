// import axios from 'axios';
import { useState, useEffect } from 'react';

/****** Retrieving information via API ******/

// axios
//   .get('http://localhost:8000/example')
//.then((response) => console.log('data', response));

export default function Login() {
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
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        console.log(response);
        if (!response.ok) {
          console.log(`500`);
          throw new Error('Server Error');
        }
        const data = await response.json();
        console.log(data);
        setAPIState({ loading: false, error: false, data });
      } catch (error) {
        setAPIState({ loading: false, error: true, data: undefined });
        console.log(`404`);
      }
    };

    fetchData();
  }, []);

  const [choix, setChoix] = useState('choix1'); // Par défaut, vous pouvez sélectionner une option

  const handleChoixChange = (e) => {
    setChoix(e.target.value);
  };

  return (
    <>
      <h2>Login</h2>
      <div>
        <label htmlFor="choix">
          Connectez vous à votre profil enseignant :
        </label>
        <select id="choix" value={choix} onChange={handleChoixChange}>
          <option value="choix1">Enseignants</option>
          <option value="choix2">Albus Dumbledore</option>
          <option value="choix3">Minerva McGonagall</option>
          <option value="choix4">Severus Rogue</option>
        </select>
      </div>
      <button>Authentification</button>
    </>
  );
}
