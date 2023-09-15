import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dashboard, Generator, Signature, Confirmation, LoginPage } from './pages/index';
import { useLocalStorage } from '@uidotdev/usehooks';
import ENV from "../ENV.js"


  

function App() {
  const BACK_HOST = ENV.BACK_HOST
  const FRONT_HOST = ENV.FRONT_HOST

  const [token, setToken] = useLocalStorage('token', null);
  const [user, setUser] = useLocalStorage('user', {id : "", name : "", firstname : "", status : "", login : ""});
  
  // const location = useLocation();

  // const redirect = (url)=>{
  //   window.location.href= FRONT_HOST + url
  // }

  const controller = () => {
    if (!token) {
      return <Dashboard  />;
    }else if(user.status ==="enseignant"){
      return <Generator  />;
    }else if(user.status ==="eleve"){
      return <Signature />
    }
  }
  
    
  
  

  

  return (
    <Router>

      
      {/* <Routes>
        <Route
          exact
          path="/"
          element={<Dashboard  />}
        />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/generator" element={<Generator />} />
        <Route exact path="/signature" element={<Signature />} />
        <Route exact path="/confirmation" element={<Confirmation />} />
      </Routes> */}
      {controller()}
    </Router>
  );
}

export default App;
