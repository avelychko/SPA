import React, { useState } from 'react';

async function postItem(item) {

}
export async function getNothin() {
    return null
}

export default function NewItem() {
    const [name, setName] = useState("");
    const [currId, setId] = useState(null);

    return (
        <>
            <h1>Add a new item</h1>
            <form onSubmit={(e) => postItem(
                { name: name, id: currId }
            )}>
                <div>
                    <label>Enter item name:
                        <input type="text"
                            placeholder="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label>Please enter an ID:
                        <input type="text"
                            placeholder='Leave blank for random id'
                            value={currId}
                            onChange={(e) => setId(e.target.value)} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>

        </>
    );
}