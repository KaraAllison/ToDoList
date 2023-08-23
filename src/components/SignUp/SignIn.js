import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import {
    signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

function SignIn(prop) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  auth.onAuthStateChanged(function(user) {
    if (user) {
      prop.setLog(true);
    } else {
      prop.setLog(false);
    }
  });

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      navigate('../todo');
    }).catch((err) => alert(err.message));
  }

  return (
    <div id='signup'>
        <form onSubmit={handleSubmit}>
            <h2>Welcome to Adventure Log</h2>
            <h3>Please sign in</h3>
            <div id='textboxes'>
            <p><label>Email<br></br><input type='email' name='email' required onChange={handleEmailChange}/></label></p>
            <br></br>
            <p><label>Password<br></br><input type='password' name='password' required onChange={handlePasswordChange}/></label></p>
            <br></br>
            <div id='button'>
              <button>Sign In</button>
              </div>
            </div>
    </form>
    </div>
  )
}

export default SignIn;