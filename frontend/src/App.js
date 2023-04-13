import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router'
import Stores from './Stores';
import './App.css';
import NewStore from './NewStore';
import Items from './Items';
import NewItem from './NewItem';
import SingleItem from './SingleItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="stores" element={<Stores />} />
          <Route path="stores/:storeId" element={<Items/>} />
          <Route path="stores/new" element={<NewStore/>} />
          <Route path="stores/:storeId/items/:itemId" element={<SingleItem/>} />
          <Route path="stores/:storeId/items/new" element={<NewItem/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
