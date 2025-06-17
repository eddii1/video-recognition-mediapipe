import { getAuth, signOut } from 'firebase/auth';
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
    <nav className='bg-white px-14 py-5 border-b border-gray-300 grid grid-cols-2 text-xl '>
      <ul className='flex  items-center gap-x-10 '>
        <li><Link to="/"><img src='logo192.png' className='w-12'></img></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/analyze">Analyze</Link></li>
      </ul>
      {currUser ?  
                <>
                  
                  <div className='flex justify-end gap-10 mr-10'>
                    <Link to="/account">
                      {/*
                    
                      <button className='flex items-center justify-end mr-3'>Contul tau</button>
            
                      */}

                      <p className='mt-1'>{currUser.email}</p>
                    </Link>
                    <Button color='dark' onClick={handleClick}>Log Out</Button>
                  </div>
                </> 
                :
                <>
                  <div className='flex justify-end gap-10 mr-10'>
                    <button><Link to="/log-in">Log In</Link></button>
                    <button><Link to="/sign-up">Sign Up</Link></button>
                  </div>
                </>
      }
    </nav>
  );
  
}

export default Navbar;
