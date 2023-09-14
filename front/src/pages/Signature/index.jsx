import { Header} from '../../components/index';
import { useEffect, useState } from 'react';
import BACK_HOST from "../../../ENV.js"
import axios from 'axios';

export default function Signature() {

  

  return (
    <>
      <Header />
      <h2> Connexion ok </h2>
      <p> Scanner le QR </p>
    </>
  );
}
