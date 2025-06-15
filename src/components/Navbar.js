import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { Button } from 'flowbite-react';

function Navbar() {
  const { currUser } = useAuth();
  console.log(currUser);

  const handleClick = (() => {
    const auth = getAuth();
    signOut(auth);
  })

  return (
    <nav className='bg-white px-14 py-4 border-b border-gray-300 grid grid-cols-2 text-xl '>
      <ul className='flex  items-center gap-x-10 '>
        <li><Link to="/"><img src='logo192.png' className='w-12'></img></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analyze">Analyze</Link></li>
      </ul>
      {currUser ?  
                <>
                  <button className='flex items-center justify-end mr-3'><Link to="/account">Cont</Link></button>
                </> 
                :
                <>
                  <button className='flex items-center justify-end mr-10'><Link to="/log-in">Log In</Link></button>
                </>
 }
    </nav>
  );
  
}

export default Navbar;
