// import logo from './logo.svg';
import './App.css';
import Info from './Info';
// import  PropTypes  from 'prop-types';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
    
      {/* <Info /> */}
      <ButtonState/>
    </div>
  );
}
 
function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0)
  
  const updateCounter = () => {
    setCount(count + 1);
   
  } 
  const updateTitle = () => {
    setTitle("We have new title now");
  }
  const decrementCounter = () => {
    setCount(count - 1);
  }
  const resetCounter = () => {
    setCount(0)
  }
  return (
    <div>
      <Info title = {title}/>
      <Data title={title} count={count} />
      <button onClick={updateTitle}>UpdateTitle</button>
      <button onClick={updateCounter}>UpdateCounter</button>
      <button onClick={decrementCounter}>DecrementCounter</button>
      <button onClick={resetCounter}>ResetCounter</button>
    </div>
  );
}

function Data(props) {
  return (<div>
    <p>Title: {props.title}</p>
    <p>Count: {props.count}</p>
  </div>);
};
// function AddItem(props) {
//   // const value = "Team is great"
//   return (
//     <form>
      
//       <label for="text-form">
//         Type something:
//       </label>
//       <input type="text" id="text-form" value={props.text}></input>
//       <p>{props.number}</p>
        
//     </form>
    
//   )
// }
// AddItem.defaultProps = {
//   text: "Default",
//   number: 0,
// };

// AddItem.propTypes = {
//   number: PropTypes.number,
// }
export default App;
