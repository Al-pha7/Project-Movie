import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input type='text' placeholder='Name'/>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input type='email' placeholder='Email ID'/>
                </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            <div className='submit-container'>
                <div className='submit' onClick={() =>{setAction('Signup')}}>Sign Up</div>
            </div>
        </div>
    )
}

export default Signup;