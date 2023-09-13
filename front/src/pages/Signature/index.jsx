import { useParams } from 'react-router-dom';

export default function Signature() {
  const params = useParams()

  console.log(params)


  return (
    <>
      <h2> Connexion ok </h2>
      <p> Scanner le QR </p>
    </>
  );
}
