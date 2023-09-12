import { Header, Login } from '../../components/index';

export default function Dashboard({handleTokenReception}) {
  return (
    <>
      <Header />
      <Login handleTokenReception={handleTokenReception}/>{' '}
    </>
  );
}
