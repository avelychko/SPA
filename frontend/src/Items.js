import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';

export default function Items() {
    const [ items, setItems] = useState([]);
    const [ store, setStore ] = useState({});
    const { storeId } = useParams();

    useEffect(()=> {
      fetch(`http://localhost:3001/stores/${storeId}/items`).then((response) => response.json()).then((data) => setItems(data));
      fetch(`http://localhost:3001/stores/${storeId}`).then((response) => response.json()).then((data) => setStore(data));
    }, [storeId]);
  
    return (
      <>
        <h1>Store</h1>
        <p>Name: {store.name}</p>
        <p>ID: {store._id} </p>
        <h1>Items</h1>
        <Link to={'items/new'}>Add Item</Link>
        <div>
          {items.map((item, index) => (
            <div key={index} className='card'>
              <Link to={`stores/${storeId}/items/${item._id}`}><h1 className="label-font">{item.name}</h1></Link>
              <p><b>ID:</b> {item._id}</p>
            </div>
          ))}
        </div>

      </>
    );
}
  