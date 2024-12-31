import React from 'react';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react'





function Signin(){

    const [credentials, setUserCredentials] = useState({
        mail:'',
        pass:'',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserCredentials((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const auth= getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
    })
    .catch((err)=>{
        const errCode=err.code;
        const errMsg=err.message;
    })


    return (
        <div>
            <label>Sign In
                <form onSubmit={handleSubmit}>
                    <input id='email' name='mail' type='email' value={credentials.mail} onchange={handleChange} required>Email</input>
                    <input id="password" name="pass" type="password" value={credentials.pass} onChange={handleChange} required>Pass</input>
                </form>
                <button type="submit">Trimite</button>
            </label>
        </div>
    );
}

export default Signin;