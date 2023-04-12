import { Link, useLoaderData } from 'react-router-dom';

export default function Stores() {
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

async function fetchStores() {
    /*const response = await fetch("http://localhost:3000/todo");
    return await response.json();*/
    return null
}

export { fetchStores };
