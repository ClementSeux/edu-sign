import React, { useState, useEffect } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from 'axios';
import QRCode from 'react-qr-code';
import BACK_HOST from "../../../ENV.js";

export default function Select() {
  const [token, setToken] = useLocalStorage('token', null);
  

  return (
    <section className="bloc-card">
      <p>selector</p>
    </section>
  );
}
