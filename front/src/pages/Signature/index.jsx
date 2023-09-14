import { Header} from '../../components/index';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios'; 
import ENV from "../../../ENV.js"

export default function Signature() {
  
  const BACK_HOST = ENV.BACK_HOST
  const FRONT_HOST = ENV.FRONT_HOST
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});
  const [token, setToken] = useLocalStorage('token', null);


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hash = searchParams.get('hash');


  
  const navigate = useNavigate();

  const redirect = ()=>{
    navigate(FRONT_HOST + "/confirmation")   
  }
 
  const sendRequest =async () => {
    console.log('sending request')
    const url = BACK_HOST + '/verify?hash=' + hash + '&token=' + token + '&id=' + user.id
    await axios
      .get(url)
      .then((response) => {
        console.log('message recu', response);
        });
  }

  
console.log(hash)
  useEffect(()=>{
    if(hash != undefined){
      console.log('hash trouvé')
      sendRequest()
    }
  },[])

  return (
    <>
      <Header />
      <h2> Connexion ok </h2>
      <p> Scanner le QR </p>
    </>
  );
}
