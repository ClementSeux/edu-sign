import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dashboard, Generator } from './pages/index';

function App() {
  const [token, setToken] = useState();

  function handleTokenReception(tokenReceived)  {
    setToken(tokenReceived)
   
  }

  if(!token) {
    return <Dashboard handleTokenReception={handleTokenReception} />
  }


  useEffect( () => {
console.log('change')
    console.log(token)
  }, [token]);

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard handleTokenReception={handleTokenReception} />} />
          <Route exact path="/generator" element={<Generator />} />
        </Routes>
      </Router>
  );
}

export default App;
