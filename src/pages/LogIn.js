import React from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function LogIn(){

    const [credentials, setUserCredentials] = useState({
        mail:'',
        pass:'',
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserCredentials((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth= getAuth();
        
        try {
            const userCred = await signInWithEmailAndPassword(auth, credentials.mail, credentials.pass);
            const user = userCred.user;
            navigate("/analyze");
        }
        catch (err) {
            alert(err.message);
        }
        
    }

    return (
        <div className='py-10 w-full grid justify-center text-4xl font-semibold'>

            <Label className='text-4xl mb-4 '>Log in</Label>

            <form onSubmit={handleSubmit} className='grid gap-2'>
                <TextInput id='email' name='mail' type='email' value={credentials.mail} onChange={handleChange} required/>
                <TextInput id='password' name='pass' type='password' value={credentials.pass} onChange={handleChange} required/>
                <Button type="submit" color="dark">Trimite</Button>
                <p className='text-lg font-normal'><Link to="/sign-up">Create account.</Link></p>

            </form>
            
        </div>
    );
}

export default LogIn;