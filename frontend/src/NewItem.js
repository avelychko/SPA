import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NewItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const { storeId } = useParams();
    const navigate = useNavigate();

    function postItem(e) {
        e.preventDefault();
    
        console.log(typeof(quantity));
        
        // create new item object from form values
        const newItem = {};
        newItem.name = name;
        newItem.quantity = quantity;
        newItem.price = price;
    
        // make POST request, sending new item data
        fetch(`http://localhost:3001/stores/${storeId}/items`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newItem)
        });
    
        navigate(`/stores/${storeId}`);
      }
    

    return (
        <>
            <h1>Add a new item</h1>
            <form onSubmit={postItem}>
                <div>
                    <label>Name:
                        <input type="text"
                            placeholder="type a name here..."
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>Price:
                        <input type="number"
                            placeholder="type a price here..."
                            value={price}
                            required
                            onChange={(e) => setPrice(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>Quantity:
                        <input type="number"
                            placeholder="type a number here..."
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>

        </>
    );
}