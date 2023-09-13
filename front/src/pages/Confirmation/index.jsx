import { Header } from '../../components/index';

export default function Confirmation({handleTokenReception}) {
  const handlerTokenReception = (token) => {
    handleTokenReception(token)
    console.log('page send token :', token)
  }

  return (
    <>
      <Header />
      <h2>Votre présence est prise en compte</h2>
    </>
  );
}
