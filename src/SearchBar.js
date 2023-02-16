import { useState } from "react";


function SearchBar(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.callBack(
            {
                name: name,
                price: price,
                type: type,
                brand: brand,
                
            });
    };
    return (
        <div>
            <h2> Search For an item</h2>
            <form>
                <label htmlFor="name-fiels">Name:</label>
                <input id="name-field" type="text" value={name} onChange= {(e) => setName(e.target.value)}></input>
                <label htmlFor="price-fiels">Max Price:</label>
                <input id="price-field" type="number" value={price}  onChange= {(e) => setPrice(e.target.value)}></input>
                <label htmlFor="type-fiels">Type:</label>
                <input id="type-field" type="text" value={type}  onChange= {(e) => setType(e.target.value)}></input>
                <label htmlFor="brand-field"> Brand </label>
                <input id="brand-field" type="text" value={brand}  onChange= {(e) => setBrand(e.target.value)}></input>
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>
            <p>Name:{name}</p>
            <p>Max Price:{price}</p>
            <p>Type:{type}</p>
            <p>Brand:{brand}</p>
        </div>
    )
};

export default SearchBar;