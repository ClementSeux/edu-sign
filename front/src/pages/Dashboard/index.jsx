import { Header, Login } from '../../components/index';
import { BannerTeach, BannerStudents } from '../../assets';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import ENV from "../../../ENV.js"

export default function Dashboard() {

  const BACK_HOST = ENV.BACK_HOST
  const FRONT_HOST = ENV.FRONT_HOST
  const [token, setToken] = useLocalStorage('token', null);
  
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});
  const [selectedStatus, setSelectedStatus] = useState("") 

  const handleStatusChoice = (choice) => {
    setSelectedStatus(choice)
  }

  const homePage = () => {
    return (
      <>
      <Header />
        <h2 className='dashboard-title'>
          5x plus rapide ! 
          <ul>
            <li>Assiduité</li>
            <li>Automatisater vos documents</li>
            <li>Analyse de l'apprentissage</li>
            <li>Alerte & gestion des cas</li>
          </ul>
        </h2>
        <div className="banner-teachers" onClick={() => {handleStatusChoice("enseignant")}}>
          <h3 className="banner-teachers__title">Connexion intervenant</h3>
          <picture className="banner-teachers__img">
            <img src={BannerTeach} alt="Teacher classroom" />
          </picture>
        </div>
        <div className="banner-students" onClick={() => {handleStatusChoice("eleve")}}>
          <h3 className="banner-students__title">Connexion apprenant</h3>
          <picture className="banner-students__img">
            <img src={BannerStudents} alt="students classroom" />
          </picture>
        </div>
      </>
    );
  }

  return (
    selectedStatus == "" ? homePage() : <Login statusSelected = {selectedStatus}/>
    
  );
}
