import { Header} from '../../components/index';
import Confirmation from '../Confirmation/index';
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

  const [requestStatus, setRequestStatus] = useState("waiting")


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hash = searchParams.get('hash');


  // const redirect = ()=>{
  //   window.location.href= FRONT_HOST + "/confirmation"   
  // }

   
  const sendRequest =async () => {
    console.log('sending request')
    const url = BACK_HOST + '/verify?hash=' + hash + '&token=' + token + '&id=' + user.id
    console.log('url ou j envoie le hash', url)
    await axios
      .get(url)
      .then((response) => {
        console.log('message recu', response);
        if(response.data.reponse === "ok"){
          setRequestStatus("accepted")
        }else{
          setRequestStatus("rejected")
        }
      }
    );
  }

console.log(hash)
console.log(requestStatus)
  useEffect(()=>{
    if(hash != undefined){
      console.log('hash trouvé')
      sendRequest()
    }
  },[hash])

  const display = () => {
    if(requestStatus === "accepted"){
      return <Confirmation />
    }else if (requestStatus === "waiting"){
      <>
        <Header />
        <h2> Connexion ok </h2>
        <p> Scanner le QR </p>
      </>
    } else{
      <>
        <Header />
        <h2> Connexion ok </h2>
        <p> Le QR Code scanné n'est plus valide </p>
        <p> Merci de réessayer </p>
      </>
    }
  }

  return (
    display()
    )}
