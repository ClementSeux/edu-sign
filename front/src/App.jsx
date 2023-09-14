import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Dashboard,
  Generator,
  Signature,
  Confirmation,
  Connect,
} from './pages/index';
import { useLocalStorage } from '@uidotdev/usehooks';

function App() {
  const [token, setToken] = useLocalStorage('token', null);

  function handleTokenReception(tokenReceived) {
    console.log('handler ', tokenReceived);
    setToken(tokenReceived);
  }

  // if (!token) {
  //   return <Connect handleTokenReception={handleTokenReception} />;
  // }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/generator" element={<Generator />} />
        <Route
          exact
          path="/login"
          element={token ? <Generator /> : <Connect />}
        />
        <Route exact path="/signature" element={<Signature />} />
        <Route exact path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
