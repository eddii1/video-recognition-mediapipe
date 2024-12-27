import React, { useRef, useEffect, useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState(0);
  
  const rng = Math.floor(Math.random() * 50);

  const handleChange = (e) => {
    const value=e.target.value;
    setInputValue(value);
    console.log(value);
  }

  const handleSubmit = () => {
    const strtonb= Number(inputValue)
    if(strtonb > rng){
      console.log("prea mare");
    }
    if(strtonb < rng){
      console.log("prea mic");
    }
    if(strtonb === rng){
      console.log(`AI GHICIT NUAMRUL: ${inputValue} `)
    }
  }


  return (
    <div>
      <p>Introdu numarul:</p>
      <input value={inputValue} onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
