import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';



function About(){
  return <h1>About page</h1>;
}

function App() {
  return (
    <>
      <Navbar />
      
    </>
  );
}

export default App;
