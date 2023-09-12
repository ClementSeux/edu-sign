import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';

export default function Qrcode() {
  const [hash, setHash] = useState('hey');

  //const getHash = async () => {
  // await axios
  // .get('http://localhost:8000/qrcode')
  // .then((response) => {
  //   console.log(response.data);
  //   setHash(response.data.hash);
  // });
  //}

  const getQrCode = () => {
    // getHash();

    return hash && <QRCode value={hash} />;
  };

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
