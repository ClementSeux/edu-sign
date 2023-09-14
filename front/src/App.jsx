import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dashboard, Generator, Signature, Confirmation, LoginPage } from './pages/index';
import { useLocalStorage } from '@uidotdev/usehooks';

function App() {
  const [token, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});
 

  if (!token) {
    return <Dashboard  />;
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Dashboard  />}
        />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/generator" element={<Generator />} />
        <Route exact path="/signature" element={<Signature />} />
        <Route exact path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
