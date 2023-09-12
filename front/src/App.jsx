import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Dashboard, Generator } from './pages/index';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Dashboard setToken={setToken} />
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard setToken={setToken} />} />
        <Route exact path="/generator" element={<Generator />} />
      </Routes>
    </Router>
  );
}

export default App;
