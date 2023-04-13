import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function NewStore() {
    const [storeName, setStoreName] = useState("");
    const navigate = useNavigate();

    function postStore(e) {
      e.preventDefault();
      
      // create new store object from form values
      const newStore = {};
      newStore.name = storeName;
  
      // make POST request, sending new store data
      fetch('http://localhost:3001/stores', {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newStore)
      });
  
      navigate('/stores');
  }

    return (
      <>
      <h1>Make a new store</h1>
        <form onSubmit={postStore}>
            <div>
            <label>Enter store name: 
                <input type="text" placeholder="type the name here..." required value={storeName} onChange={(e) => setStoreName(e.target.value)}/>
            </label>
            </div>
            <input type="submit" value="Add Store" />
        </form>

      </>
    );
}