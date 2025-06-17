import React from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';

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
        console.log('Cont creeat', userCredentials.user);
        navigate('/home');

       } catch (err){
        console.log("err:",err.code, err.message);
        alert(err.message);
       }
        
    }

    return (
        <div className='py-12 w-full grid justify-center text-4xl font-semibold'>

            <Label className='text-4xl mb-4 '>Creeaza un cont nou</Label>

            <form onSubmit={handleSubmit} className='grid gap-1'>
                <p className='text-lg font-normal'>Email</p>
                <TextInput id='email' name='mail' type='email' value={credentials.mail} onChange={handleChange} required/>
                <p className='text-lg font-normal'>Parola</p>
                <TextInput id='password' name='pass' type='password' value={credentials.pass} onChange={handleChange} required/>
                <Button className='mt-1' type="submit" color="dark">Trimite</Button>
    
            </form>
            
        </div>
    );
}

export default SignUp;