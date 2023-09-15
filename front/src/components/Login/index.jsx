/****** Retrieving information via API ******/

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import useSelectedUser from "../../hook/useSelectedUser";
import Selector from "../Select/index.jsx"

import ENV from "../../../ENV.js"

export default function Login({statusSelected}) {
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
  const [password, setPassword] = useState('')
  const [wrongPasswordAlert, setWrongPasswordAlert] = useState(false)

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
    console.log('id requete', selectedUser.id)
    console.log('password sent', password)

    const [authorised, token]  = await sendData({id :selectedUser.id, password : password});

    if (authorised){
      setUser({...selectedUser})
      return token;
    }
  };

  const sendData = async (objectToSend) => {
    let data = JSON.stringify(objectToSend);
  
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BACK_HOST + "/api/token-api",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    const [authorised, token] = await axios
      .request(config)
      .then((response) => {
        console.log('sending post request', JSON.stringify(response.data));
        if(response.status === 200){
          return [true, response.data.token];
        }else{
          setWrongPasswordAlert(true)
          return [false, ""]
        }        
      })
      .catch((error) => {
        console.log(error);
        return [false, ""]
      });
      return[authorised, token]
    }
  
    // back up en get
    // const getToken = async () => {
    //   console.log('id requete', selectedUser)
    //   const [authorised, token] = await axios
    //     .get(BACK_HOST + '/token?id=' + selectedUser.id)
    //     .then((response) => {
    //       console.log('token reçu', response);
    //       if(response.status === 200){
    //         setUser({...selectedUser})
    //         return [true, response.data.token];
    //       }else{
    //         return [false, ""]
    //       }        
    //     });
    //   if (authorised){
    //     return token;
    //   }
    // };

 

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

  const handlePassword = (val) => {
    setPassword(val)
  }

  useEffect(()=>{console.log(password)},[password])
  return (
    <main>
      <h2>Login</h2>
      {/* Afficher l'état de chargement ou des erreurs */}
      <h4>{statusSelected}</h4>
      {APIState.loading ? (
        <p>Loading...</p>
      ) : APIState.error ? (
        <p> Impossible de retrouver vos informations</p>
      ) : (
        <>
          <Selector selectedUser={selectedUser} setSelectedUser={handleSetSelectedUser} optionsList={users != [] ? users.filter(item => item.status === statusSelected) : []}></Selector>
          <input className="password-field" type="password" name = "password" value={password} onChange={(e)=>{handlePassword(e.target.value)}}/>
    {<p className={wrongPasswordAlert ? "red-alert visible " : "red-alert"}>Mot de passe érroné</p>}
          <button className="auth-button" onClick={authentificate}>Authentification</button>          
        </>
      )}      
    </main>
  );
}
