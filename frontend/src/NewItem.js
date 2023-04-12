import React, { useState } from 'react';

async function postItem(item) {

}
export async function getNothin() {
    return null
}

export default function NewItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);

    return (
        <>
            <h1>Add a new item</h1>
            <form onSubmit={(e) => postItem(
                { name: name, price: price, quantity: quantity }
            )}>
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