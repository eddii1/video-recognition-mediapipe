import React, { createContext, useContext, useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext= createContext(null);

export function AuthProvider ( { children } ) {
    const [currUser]
}