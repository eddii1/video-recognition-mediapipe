import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>      
    </div>
  );
}

export default App;
