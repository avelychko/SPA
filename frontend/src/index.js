import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*
import Wrapper from './Wrapper';
import Stores, { fetchStores } from './Stores';
import Items from './Items';
import SingleItem, { fetchSingleItem } from './SingleItem';
import NewStore, { getNothin } from './NewStore';
import NewItem from './NewItem';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
*/

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/stores",
        loader: fetchStores,
        element: <Stores />,
      },
      {
        path: "/stores/new",
        //loader: getNothin,
        element: (
            <NewStore />
        ),
      },
      {
        path: "/stores/:storeId",
        element: (
          <Items />
        ),
      },
      {
        path: "/stores/:storeId/items/:itemId",
        element: (
          <SingleItem />
        ),
      },
      {
        path: "/stores/:storeId/items/new",
        element: (
          <NewItem />
        ),
      },
    ],
  },
]);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
