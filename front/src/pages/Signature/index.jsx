import { Header} from '../../components/index';
import { useEffect, useState } from 'react';
import BACK_HOST from "../../../ENV.js"
import axios from 'axios';

export default function Signature() {

  const getHash = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const hash = queryParameters.get("hash")
    console.log(hash)
    return hash
  }
  
  const postRequest = async (hash) => {
    let data = {
      'hash': hash
    };
    let result = [];

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: BACK_HOST + "/verify",
      headers: {},
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        result = response.data.response;
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  };
  
  useEffect( () => {
    const hash = getHash()
    postRequest(hash).then((response)=>console.log('response de l api verify', response))
     
      },[] );

  return (
    <>
      <Header />
      <h2> Connexion ok </h2>
      <p> Scanner le QR </p>
    </>
  );
}
