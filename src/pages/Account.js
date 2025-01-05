import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';


function Account(){

    const navigate = useNavigate();

    const handleClick = (() => {
        const auth = getAuth();
        signOut(auth);
        navigate("/");
      })
    
    return (
        <>
            <div className='flex justify-center py-32'>
                <Button color="dark" onClick={handleClick}>Log out</Button>
            </div>
        </>
    );
}

export default Account;