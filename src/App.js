import React, { useEffect, useState } from 'react';

function App(){

  const [inputValue, setInputValue] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [listgood, addListGood] = useState([]);
  const [keyToCheck, setKeyToCheck] = useState("NULL");
  const [dictionary, addDictionary] = useState({});

  const handleGlobalClick = (e) => {
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

  }, [])

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


export default App;
