import { Header } from '../../components/index';
import { BannerTeach, BannerStudents } from '../../assets';

export default function Dashboard() {
  const handlerTokenReception = (token) => {
    handleTokenReception(token);
    console.log('page send token :', token);
  };

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
      <a href="/login" className="banner-teachers">
        <h3 className="banner-teachers__title">Connexion intervenant</h3>
        <picture className="banner-teachers__img">
          <img src={BannerTeach} alt="Teacher classroom" />
        </picture>
      </a>
      <a href="/login" className="banner-students">
        <h3 className="banner-students__title">Connexion apprenant</h3>
        <picture className="banner-students__img">
          <img src={BannerStudents} alt="students classroom" />
        </picture>
      </a>
    </>
  );
}
