import React, { useEffect, useState } from 'react';

/*
function App(){

  const [inputValue, setInputValue] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [listgood, addListGood] = useState([]);
  const [keyToCheck, setKeyToCheck] = useState("NULL");
  const [dictionary, addDictionary] = useState({});

  const handleGlobalClick = () => {
    setClickCount((prevClick) => {
      const newclick=prevClick+1;
      return  newclick;
    })
  }

  const submitHandle = (e) => {
    e.preventDefault();
    if(listgood.includes(inputValue))
      alert("DEJA IN LISTA");
    else{
      addListGood((prevList) => [...prevList, inputValue]);
      addDictionary((prevDictionary) => ({
                                      ...prevDictionary, [inputValue]:0,
      }));
    }
    
    setInputValue("");
  };

  const handleClick= (element) => {
    addDictionary((prevDict) => ({...prevDict,[element]:1,}));
    addListGood((prevList) => prevList.filter((item) => item !== element));
    setKeyToCheck(element);
  };

  useEffect(() => {
    console.log("Updated Dict:", dictionary);
    if(dictionary[keyToCheck]===1)
      console.log(`${keyToCheck} e 1`);
  }, [dictionary,keyToCheck]);

  const da = listgood.map((element, ix) => <li key={ix}>{element}
<button onClick={() => handleClick(element)}>Apasa</button>
</li>);
  
  useEffect(() => {
    document.addEventListener("click",handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);
  

  return (
    <div>
      
      <form onSubmit={submitHandle}>
        <label>Introdu <br></br>
          <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>List</p>
      <ul>
        {da}
      </ul>

      <p>Global clicks: {clickCount}</p>

    </div>
  );
}

*/

function App(){
  const [primulPlayer, setPrimulPlayer] = useState(-1);
  const [doileaPlayer, setDoileaPlayer] = useState(-1);
  const [rezultat, setRezultat] = useState("nu");
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = () => {
    setDoileaPlayer(() => Math.floor(Math.random() * 3));
    if(primulPlayer === -1 || doileaPlayer === -1 )
      setRezultat("invalid");
    else if(primulPlayer === doileaPlayer)
      setRezultat("DRAW");

  }

  const handleChange = (e) => {
    const value = e.target.value
    setSelectedOption(value);
    if(value === "rock")
      setPrimulPlayer(0);
    if(value === "paper")
      setPrimulPlayer(1);
    if(value==="scrissors")
      setPrimulPlayer(2);
  }

  return (
      <div>
        <h1>0 - PIATRA ; 1 - HARTIE ; 2 - FOARFECA</h1>
        <p>Ce alegi?</p>
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Selecteaza o optiune</option>
          <option value="rock">rock</option>
          <option value="paper">paper</option>
          <option value="scrissors">scrissors</option>
        </select>
        
        <p>Primul Player: {primulPlayer}</p>

        <br></br>
        <button onClick={handleClick}>Apasa</button>
        <p>Doilea player: {doileaPlayer}</p>
        <p>{rezultat}</p>
      </div>
  );
}

export default App;
