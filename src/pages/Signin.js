import React from 'react';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signin(){

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
        <div>
            <label>Sign In
                <form onSubmit={handleSubmit}>
                    <input id='email' name='mail' type='email' value={credentials.mail} onChange={handleChange} required/>
                    <input id='password' name='pass' type='password' value={credentials.pass} onChange={handleChange} required/>
                    <button type="submit">Trimite</button>
                </form>
            </label>
        </div>
    );
}

export default Signin;