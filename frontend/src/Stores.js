import {Link, useLoaderData} from 'react-router-dom';

export default function Stores() {
    const { stores } = [{ id: 1, name: "Target"}] //useLoaderData();
  
    return (
      <>
        <link rel="stylesheet" href="style.css"/>
        <h1>My stores</h1>
          {[{ id: 1, name: "Target", products: [{ _id: 1, name: "Soap" }]}].map((store) => (
            <div key={store.id} className="card">
                <Link to={`${store.id}`}><h1 className="label-font">{store.name}</h1></Link>
                <h4>Products:</h4>
                { store.products.map((item) => (
                  <div> {item.name} </div>
                ))}
                <h4 className="label-font">ID: { store.id }</h4>
          </div>
              ))}

      </>
    );
  }
  
  async function fetchStores() {
    /*const response = await fetch("http://localhost:3000/stores");
    return await response.json();*/
    return null
  }
  
  export { fetchStores };
  