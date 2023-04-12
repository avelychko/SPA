import React, { useState } from 'react';

async function postStore(store) {

}
export async function getNothin() {
    return null
}

export default function NewStore() {
    const [name, setName] = useState("");
    const [products, setProducts] = useState([]);
    const [currId, setId] = useState(null);

    return (
      <>
      <h1>Make a new store</h1>
        <form onSubmit={(e) => postStore(
            {name: name, [products]: products, id: currId}
            )}>
            <div>
            <label>Enter store name: 
                <input type="text"
                placeholder="type the name here..."
                required
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </label>
            </div>
            <input type="submit" value="Add Store" />
        </form>

      </>
    );
  }