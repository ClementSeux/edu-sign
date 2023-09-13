import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dashboard, Generator, Signature } from './pages/index';
import { useLocalStorage } from '@uidotdev/usehooks';

function App() {
  const [token, setToken] = useLocalStorage('token', null);

  function handleTokenReception(tokenReceived) {
    console.log('handler ', tokenReceived);
    setToken(tokenReceived);
  }
  // useEffect( () => {
  //   setToken('null')

  //     },[] );

  if (!token) {
    return <Dashboard handleTokenReception={handleTokenReception} />;
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Dashboard handleTokenReception={handleTokenReception} />}
        />
        <Route exact path="/generator" element={<Generator />} />
        <Route exact path="/signature" element={<Signature />} />
      </Routes>
    </Router>
  );
}

export default App;
