import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Analyze(){
  const [isSignedIn, setIsSignedIn] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if ( user ) {
      setIsSignedIn(true);
    }
    else{
      setIsSignedIn(false);
    }
  })

  return (
  <>
      { isSignedIn ? 
        <div className='py-10 w-full grid justify-center text-4xl '>
            <p>Logat</p>
        </div>
        
        :

       <div className='py-10  grid justify-center text-3xl '>
          <p className='mb-5'>Inregistreaza-te pentru a avea acces</p>
          <Link to="/log-in"><Button className='w-1/4 mx-auto' color="dark">Log in</Button></Link>
        </div>
        }
    </>
  )
}

export default Analyze;