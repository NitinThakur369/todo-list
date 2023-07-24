import { useState } from 'react';
import './App.css';

function App() {


  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(" ");
  };


  return (
    <>

      <div className="main_div">
        <div className="Todo_div">

          <br />
          <h1>ToDo List</h1>
          <br />

          <input type="text" placeholder='Add your Item' onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>


          <ol>

            {Items.map((itemValue) => {
              return <li>{itemValue}</li>
            })}

          </ol>

        </div>
      </div>

    </>
  );
}

export default App;
