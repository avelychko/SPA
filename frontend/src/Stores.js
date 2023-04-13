import {Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'

export default function Stores() {
    const [stores, setStores] = useState([]);
    
    useEffect(()=> {
      fetch('http://localhost:3001/stores').then((response) => response.json()).then((data) => setStores(data));
    }, []);

    return (
      <>
        <h1>My stores</h1>
          <Link to="new">Make a new store</Link>
          {stores.map((store, index) => (
            <div key={index} className="card">
                <Link to={`${store._id}`}><h1 className="label-font">{store.name}</h1></Link>
                <p><b>ID:</b> {store._id}</p>
          </div>
              ))}
      </>
    );
}
  