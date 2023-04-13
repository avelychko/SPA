import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleItem() {
    const [ item, setItem] = useState({});
    const { storeId, itemId } = useParams();

    useEffect(()=> {
      fetch(`http://localhost:3001/stores/${storeId}/items/${itemId}`).then((response) => response.json()).then((data) => setItem(data));
    }, [storeId, itemId]);

    return (
        <>
            <h1>Item</h1>
            <h2>Name: {item.name}</h2>
            <div>
                <p>ID: {item._id}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity} </p>
                <p>Store ID: {item.store_id}</p>
            </div>

        </>
    );
}

async function fetchSingleItem() {
    /*const response = await fetch("http://localhost:3000/items/${params.item_id}");
    return await response.json();*/
    return null
}

export { fetchSingleItem };