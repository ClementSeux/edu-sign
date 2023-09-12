import axios from 'axios';

export default function Login() {
  axios
    .get('http://localhost:8000/exemple')
    .then((response) => console.log('data', response));

  return (
    <>
      <h2>Login</h2>
    </>
  );
}
