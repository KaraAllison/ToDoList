import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import {
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';


function SignUp(prop) {
  const [userName, setUserName] = useState('');
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

  const handleUserChange = (event) => {
    setUserName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      updateProfile(auth.currentUser, { displayName: userName });
      navigate('todo');
    }).catch((err) =>alert(err.code));
  }

  return (
    <div id='signup'>
        <form onSubmit={handleSubmit}>
            <h2>Welcome to Adventure Log</h2>
            <h3>Please create an account</h3>
            <div id='textboxes'>
            <p><label>UserName<br></br><input type='text' name='userName' required autofocus onChange={handleUserChange}/></label></p>
            <br></br>
            <p><label>Email<br></br><input type='email' name='email' required onChange={handleEmailChange}/></label></p>
            <br></br>
            <p><label>Password<br></br><input type='password' name='password' required onChange={handlePasswordChange}/></label></p>
            <br></br>
            <div id='button'>
              <button>Sign Up</button>
              </div>
            </div>
    </form>
    </div>
  )
}

export default SignUp;