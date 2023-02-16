
import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
function App() {
  const [data, setData] = useState({});
  const updateData = (searchParams) => {
    setData(searchParams);
  };
  return (
    <div className="App">
      <SearchBar callBack={updateData} />
      <h3>Name: { "name" in data ? data["name"] : "No Data to display"}</h3>
      <h3>Max-price: { "price" in data ? data["price"] : "No Data to display"}</h3>
      <h3>Type: { "type" in data ? data["type"] : "No Data to display"}</h3>
      <h3>Brand: { "brand" in data ? data["brand"] : "No Data to display"}</h3>
    </div>
  );
}
 

export default App;
