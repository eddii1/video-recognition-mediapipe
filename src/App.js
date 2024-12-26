import React, { useEffect, useState } from 'react';

const options = {
  rock: 0,
  paper: 1,
  scissors: 2,
};

function App() {

  return (
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Select an option</option>
        {Object.keys(options).map((key) => {
          <option key={key} value={key}>
            {key}
          </option>
        })}
      </select>
  );
}

export default App;
