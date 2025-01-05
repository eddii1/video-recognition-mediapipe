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
        <div className='p-10 text-3xl'>
            <p>LOGGED IN</p>
        </div>
        
        :

       <div className='p-10 text-3xl'>
          <p className='mb-5'>NOT LOGGED IN</p>
          <Button color="dark"><Link to="/log-in">Log in</Link></Button>
        </div>
        }
    </>
  )
}

export default Analyze;