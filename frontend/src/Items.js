import './style.css';

export default function Items() {
    const { items } = [{ id: 1, name: "Target"}] //useLoaderData();
  
    return (
      <>
        <h1>{"Target"} Items</h1>
        <div className='card'>
          <h4 className='label-font'>Products:</h4>
          { [{_id: 1, name: "Soap"}].map((item) => (
            <div className='label-font'> {item.name} </div>
          ))}
        </div>

      </>
    );
  }
  
  async function fetchItems() {
    /*const response = await fetch("http://localhost:3000/stores/${params.store_id}/items");
    return await response.json();*/
    return null
  }
  
  export { fetchItems };
  