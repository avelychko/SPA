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
            <label>Enter a description: 
                <input type="text"
                placeholder="Please enter a store name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </label>
            </div>
            
            <div>
            <label>Please enter an ID: 
                <input type="text"
                placeholder='Leave blank for random id'
                value={currId}
                onChange={(e) => setId(e.target.value)}/>
            </label>
            </div>
            <input type="submit" value="Submit" />
        </form>

      </>
    );
  }