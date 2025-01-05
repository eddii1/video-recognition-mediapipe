import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext= createContext(null);

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider ( { children } ) {
    const [currUser, setCurrUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const auth = getAuth();
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
            setLoading(false);
        });

        return () => unsub();
    })

    const value = {
        currUser, 
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading ?  children : <p className='p-10 text-3xl'>Loading...</p>}
        </AuthContext.Provider>
    );

}