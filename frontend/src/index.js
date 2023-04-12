import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wrapper from './Wrapper';
import Stores, { fetchStores } from './Stores';
import Items from './Items';
import SingleItem, { fetchSingleItem } from './SingleItem';
import reportWebVitals from './reportWebVitals';
import NewStore, { getNothin } from './NewStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/stores",
        //loader: fetchStores,
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
          <Items />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
