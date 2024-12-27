import React, { useRef, useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current === null){
      intervalRef.current =
        setInterval(() => {
          setCount((count) => count +1); }, 1000);
    } else {
      return;
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  const reset = () => {
    setCount(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    start();
  }

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={start}>Start timer</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
