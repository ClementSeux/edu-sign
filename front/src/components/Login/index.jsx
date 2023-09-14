/****** Retrieving information via API ******/

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import useSelectedUser from "../../hook/useSelectedUser";
import Selector from "../Select/index.jsx"

import ENV from "../../../ENV.js"

export default function Login() {
  const BACK_HOST = ENV.BACK_HOST
  const FRONT_HOST = ENV.FRONT_HOST
  const [token, setToken] = useLocalStorage('token', null);
  const [users, setUsers] = useState([]) 
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});
  const [selectedUser, setSelectedUser] = useSelectedUser();
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
          BACK_HOST + '/users',
        );
        console.log(response);
        if (!response.ok) {
          console.log(`500`);
          throw new Error('Server Error');
        }
        const data = await response.json();
        console.log(data);
        setUsers(data)
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
    console.log('id requete', selectedUser)
    const [authorised, token] = await axios
      .get(BACK_HOST + '/token?id=' + selectedUser.id)
      .then((response) => {
        console.log('token reçu', response);
        if(response.status === 200){
          setUser({...selectedUser})
          return [true, response.data.token];
        }else{
          return [false, ""]
        }        
      });
    if (authorised){
      return token;
    }
  };

  const [choix, setChoix] = useState('choix1'); // Par défaut, vous pouvez sélectionner une option

  const handleChoixChange = (e) => {
    setChoix(e.target.value);
  };

  const handleSetSelectedUser = (inputId) => {
    const selectedUserData = users.find(user => user.id === inputId);
    setSelectedUser({...selectedUserData})
  }

  const authentificate = () => {
    getToken().then((tokenReceived) => {
      // handleTokenReception(tokenReceived);
      setToken(tokenReceived)
      console.log('login component : received token', tokenReceived);
    });
  };

  return (
    <main>
      <h2>Login</h2>
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

      <Selector selectedUser={selectedUser} setSelectedUser={handleSetSelectedUser} optionsList={users != [] ? users : []}></Selector>
    </main>
  );
}
