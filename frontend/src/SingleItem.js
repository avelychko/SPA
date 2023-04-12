import { Link, useLoaderData } from 'react-router-dom';

export default function SingleItem() {
    const { item } = [{ id: 1, name: "Soap" }] //useLoaderData();

    return (
        <>
            <link rel="stylesheet" href="style.css" />
            <h4>{"Soap"}</h4>
            <div>
                <p>id: My id</p>
                <p>quantity: My id</p>
                <p>price: My id</p>
                <p>store_id: My id</p>
            </div>

        </>
    );
}

async function fetchSingleItem() {
    /*const response = await fetch("http://localhost:3000/items/${params.item_id}");
    return await response.json();*/
    return null
}

export { fetchSingleItem };