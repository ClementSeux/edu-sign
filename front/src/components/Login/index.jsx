import axios from 'axios';
import { useState } from 'react';

export default function Login({setToken}) {

  const getToken = async () => {
    await axios
    .get('http://localhost:8000/qrcode')
    .then((response) => {
      console.log(response.data);
      return(response.data.token);
    });
  }

  function ProfilDropDown() {
    const [choix, setChoix] = useState('choix1'); // Par défaut, vous pouvez sélectionner une option

    const handleChoixChange = (e) => {
      setChoix(e.target.value);
    };

    
    return (
      <div>
        <label htmlFor="choix">Connectez vous à votre profil enseignant :</label>
        <select id="choix" value={choix} onChange={handleChoixChange}>
          <option value="choix1">Enseignants</option>
          <option value="choix2">Albus Dumbledore</option>
          <option value="choix3">Minerva McGonagall</option>
          <option value="choix4">Severus Rogue</option>
        </select>
      </div>
    );
  }

  /***** AUTHENTIFACTION BUTTON ******/

  function AuthButton() {
      return(
          <button>Authentification</button>
      )
  }

  useEffect(async () => {
    let token = await getToken()
    setToken(token)
  }, []);


  return (
    <>
      <h2>Login</h2>
      <ProfilDropDown />
      <AuthButton />
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}