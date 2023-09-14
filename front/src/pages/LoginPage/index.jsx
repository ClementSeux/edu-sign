import { Header, Login } from '../../components/index';

export default function LoginPage({handleTokenReception}) {
  const handlerTokenReception = (token) => {
    handleTokenReception(token)
    console.log('page send token :', token)
  }

  return (
    <>
      <Header />
      <Login handleTokenReception={handlerTokenReception}/>{' '}
    </>
  );
}
