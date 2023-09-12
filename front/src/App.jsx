import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Dashboard, Generator } from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/generator" element={<Generator />} />
      </Routes>
    </Router>
  );
}

export default App;
