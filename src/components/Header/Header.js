import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig";
import { useState } from "react";

function Header(prop) {
    const navigate = useNavigate();
    let signTag;
    const [override, setOverride] = useState(false);

    if (prop.log) {
        signTag = <button onClick={function() {
            auth.signOut().then(function() {
                setOverride(false);
                navigate('/');
            })
        }}>Log Out</button>
    } else if (override){
        signTag = <button onClick={function () {
            setOverride(false);
            navigate('/');
        }}>Sign Up</button>
    } else {
        signTag = <button onClick={function() {
            setOverride(true);
            navigate('/signin');
        }}>Sign In</button>
    }
    return (
        <div>
            <h1>Adventure Log - Life's Quest Tracker</h1>
            <div id='signbtn'>{signTag}</div>
        </div>
    )
}

export default Header;