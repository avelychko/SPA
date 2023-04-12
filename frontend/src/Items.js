import './style.css';

export default function Items() {
    const { items } = [{ id: 1, name: "Target"}] //useLoaderData();
  
    return (
      <>
        <h1>Store Items</h1>
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
  
  async function fetchItems() {
    /*const response = await fetch("http://localhost:3000/stores/${params.store_id}/items");
    return await response.json();*/
    return null
  }
  
  export { fetchItems };
  