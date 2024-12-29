import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home(){
  return <h1>Home Page</h1>;
}

function About(){
  return <h1>About page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
