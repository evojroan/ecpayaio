import { Routes, Route } from 'react-router-dom';
import Itempage from './pages/item';
import Backpage from './pages/back';

import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path='/back'
        element={<Backpage />}
      />
      <Route
        path='*'
        element={<Itempage />}
      />
    </Routes>
  );
}

export default App;
