import React, { useState, useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from 'axios';
import QRCode from 'react-qr-code';
import BACK_HOST from "../../../ENV.js";

export default function Qrcode() {
  const [token, setToken] = useLocalStorage('token', null);
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

    return(
     <QRCode title = {BACK_HOST + '/verify?hash=' + hash + '&token=' + token} value={BACK_HOST + '/verify?hash=' + hash + '&token=' + token} />
    ) 
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Code à exécuter toutes les 15 secondes
      getHash()
    }, 15000); // 1000 ms = 1 seconde

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
