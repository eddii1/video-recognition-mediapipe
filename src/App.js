import React from 'react';
import {useState} from 'react';

function App(){
  const pas= 3;
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const checkCounter = () => {
    if (count === pas-1)
      setIsLoggedIn(false);
  };

  const handleIncrement = () => {
    setCount(count+1);
    checkCounter();
  };

  return(
    <div>
      {isLoggedIn ? (
        <div>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      ) : (
        <h1>You have been logged out!</h1>
      )}
    </div>
  );
}


export default App;
