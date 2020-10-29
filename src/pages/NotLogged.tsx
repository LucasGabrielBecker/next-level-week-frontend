import React from 'react';
import { Link } from 'react-router-dom';
import notLoggedImage from '../images/notLogged.svg'
import "../styles/pages/notLoggedIn.css"

export default function NotLoggedIn(){
    return(
        <div className="container">
            <div className="infos">
                <span>You seen not to be Logged in</span>
                <Link to="/login"><p>Click to be redirected to Login</p></Link>
            </div>
            <img src={notLoggedImage} alt="funny svg"/>


        </div>
    )
}