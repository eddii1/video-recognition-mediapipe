import React from 'react';
import {useState} from 'react';

function Counter(){
  const [count, setCount] = useState(3);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}

function Salutare(persoana){
  return <h1>Salut, {persoana.nume}</h1>
}

function App(){
  const isLoggedIn = true;
  const handleClick = () => {
    alert('Buton APasat');
  };

  return(
    <div>
      {isLoggedIn ? <h1>Bine ai venit</h1> : <h1>Log</h1>}
      <button onClick={handleClick}>Click me</button>
      <Salutare  nume="Rizea" />
      <Counter/>
      <p>DDDDDDD</p>
    </div>
  );
}

export default App;
