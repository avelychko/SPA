import { Link, useLoaderData } from 'react-router-dom';

export default function Item() {
    const { item } = [{ id: 1, name: "Soap" }] //useLoaderData();

    return (
        <>
            <link rel="stylesheet" href="style.css" />
            <h1>{item.name}</h1>
            <div key={item.id}>
                <text>id: {item.id}</text>
            </div>

        </>
    );
}

async function fetchItems() {
    /*const response = await fetch("http://localhost:3000/items/${params.item_id}");
    return await response.json();*/
    return null
}

export { fetchItems };
