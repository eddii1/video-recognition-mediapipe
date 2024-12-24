import React from 'react';
import {useState} from 'react';

/*
function App(){
  const pas= 3;
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const handleIncrement = () => {
    setCount((prevCount) => {
      const newcount = prevCount + 1;
      if (newcount === pas)
        setIsLoggedIn(false);
      return newcount;
    });
  };

  const handleClick = () => {
    setCount(0);
    setIsLoggedIn(true);
  };

  return(
    <div>
      {isLoggedIn ? (
        <div>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      ) : (
        <div>
          <h1>You have been logged out!</h1>
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
}
*/

function App(){

  const [inputValue, setInputValue] = useState("");
  const [listgood, addListGood] = useState([""]);

  const submitHandle = (e) => {
    e.preventDefault();
    if(listgood.includes(inputValue))
      alert("DEJA IN LISTA");
    else{
      addListGood((prevList) => [...prevList, inputValue+ " "]);
    }
    
    setInputValue("");
  };

  return (
    <div>
      
      <form onSubmit={submitHandle}>
        <label>Introdu <br></br>
          <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>List : {listgood}</p>

    </div>
  );
}


export default App;
