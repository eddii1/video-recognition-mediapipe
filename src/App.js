import React, { useEffect, useState } from 'react';

const options = {
  rock: 0,
  paper: 1,
  scissors: 2,
};

function App() {
  
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    console.log(Object.keys(options).find((key) => options[key]===1));

  }

  
  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Select an option</option>
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
        <p>Selectat: {selectedValue}</p>
      </div>
  );
}

export default App;
