import React from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';

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
      { isSignedIn ? <h1>da</h1> : <h1>nu</h1>}
    </>
  )
}

export default Analyze;