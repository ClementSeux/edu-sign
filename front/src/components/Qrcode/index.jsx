import React, { useState, useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from 'axios';
import QRCode from 'react-qr-code';
import ENV from "../../../ENV.js";

export default function Qrcode() {
  const BACK_HOST = ENV.BACK_HOST
  const FRONT_HOST = ENV.FRONT_HOST
  const [token, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});
  
  const [hash, setHash] = useState("");

  const getHash = async () => {
    await axios
    .get(BACK_HOST + '/qrcode')
    .then((response) => {
      console.log(response.data);
      setHash(response.data.hash);
    });
  }

  const getQrCode = () => {
    const url = FRONT_HOST + '/signature?hash=' + hash 
    return(
     <QRCode title = {url} value={url} />
    ) 
  }



  // const getQrCode = () => {
  //   const url = BACK_HOST + '/verify?hash=' + hash + '&token=' + token + '&id=' + user.id
  //   return(
  //    <QRCode title = {url} value={url} />
  //   ) 
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      // Code à exécuter toutes les 15 secondes
      getHash()
    }, 5000); // 1000 ms = 1 seconde

    // Nettoyage de l'effet
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bloc-card">
      <div className="container-card">
        <div id="qrcode" className="card-qr">
          {' '}
          {getQrCode()}
        </div>
        <h2>Scannez ce code</h2>
      </div>
    </section>
  );
}
