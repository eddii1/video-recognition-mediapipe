import React from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp(){

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
        const userCredentials = await createUserWithEmailAndPassword(
            auth, credentials.mail, credentials.pass,
        );
        console.log('Cont creat', userCredentials.user);
        navigate('/analyze');

       } catch (err){
        console.log("err:",err.code, err.message);
        alert(err.message);
       }
        
    }

    return (
        <div className='py-10 w-full flex justify-center'>
            <Label className='text-2xl mb-5 '>Sign Up
                <form onSubmit={handleSubmit} className='grid gap-2'>
                    <TextInput id='email' name='mail' type='email' value={credentials.mail} onChange={handleChange} required/>
                    <TextInput id='password' name='pass' type='password' value={credentials.pass} onChange={handleChange} required/>
                    <Button type="submit" color="dark" className='mt-3'>Trimite</Button>
                </form>
            </Label>
        </div>
    );
}

export default SignUp;