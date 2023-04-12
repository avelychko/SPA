import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router'
import Wrapper from './Wrapper';
import Stores from './Stores';
import './App.css';
import NewStore from './NewStore';

function App() {
  return (
    <BrowserRouter>
      <Routes location="/">
        <Route index element={<Wrapper />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/stores/new" element={<NewStore />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
