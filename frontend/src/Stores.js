import {Link, useLoaderData} from 'react-router-dom';

export default function Stores() {
    const { stores } = [{ id: 1, name: "Target"}] //useLoaderData();
  
    return (
      <>
        {/* <link rel="stylesheet" href="Stores.css"/> */}
        <h1>My stores</h1>
          {/*stores.map((store) => (
            <div key={store.id}>
                <Link to={`${store.id}`}><h1 className="label-font">{store.name}</h1></Link>
                <h4>Products: {// todo 
                }</h4>
                <h4>ID: { store.id }</h4>
          </div>
              ))*/}

      </>
    );
  }
  
  async function fetchStores() {
    /*const response = await fetch("http://localhost:3000/todo");
    return await response.json();*/
    return null
  }
  
  export { fetchStores };
  