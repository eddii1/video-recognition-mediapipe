import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-white px-14 py-3 border-b border-gray-300 grid grid-cols-2 text-xl '>
      <ul className='flex  items-center gap-10 '>
        <li><Link to="/"><img src='logo192.png' className='w-12'></img></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <button className='flex items-center justify-end mr-10'><Link to="/sign-in">Sign In</Link></button>
    </nav>
  );
}

export default Navbar;
