import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router'
import Wrapper from './Wrapper';
import Stores from './Stores';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes location="/">
        <Route index element={<Wrapper />} />
        <Route path="/stores" element={<Stores />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
