import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Dashboard } from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
