import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-slate-200 px-14 font-semibold py-2 grid grid-cols-2 text-xl '>
      <ul className='flex gap-10'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <button className='flex justify-end mr-10'>Sign In</button>
    </nav>
  );
}

export default Navbar;
