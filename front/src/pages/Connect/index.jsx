import { Header, Login } from '../../components';

export default function Connect({ handleTokenReception }) {

  const handlerTokenReception = (token) => {
    handleTokenReception(token);
    console.log('page send token :', token);
  };

  return (
    <>
      <Header />
      <Login handleTokenReception={handlerTokenReception} />{' '}
    </>
  );
}
