import React, { useState } from 'react';
import LoginLogo from '../images/Logotipo.svg'
import "../styles/pages/loginPage.css"
import {FiArrowLeft} from "react-icons/fi"
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import Toaster from "../components/Toasterino"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage(){
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory();
    const [loginStatus, setLoginStatus] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            email,
            password
        }


        api.post('login', data).then(res=>{
            if (res.data.succes){

                localStorage.setItem('token', JSON.stringify(res.data.token));
                history.push('/app')
            }else{
                toast.error(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    });
            }
        })
    }

    return(
        <div className="login-container">
            <div className="toaster">
            <ToastContainer/>
            </div>
            <div className="left-panel">
                <img src={LoginLogo} alt="Logo happy"/>
                <div className="location">
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </div>
            </div>
            <div className="right-panel">
                <Link to="/">
                    <div className="goback-button">
                        <FiArrowLeft size={25} color="#15C3D6" />
                    </div>
                </Link>
                <form onSubmit={handleSubmit} action="POST" className="form-content">

                    <div className="input-data">
                        <h2>Fazer Login</h2>
                        <span >Email</span><br></br>

                        <input
                            className={!email ? '' : 'activeInput'}
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            autoComplete="off"
                            type="email"
                            name="email"/><br/>

                        <span>Senha</span><br></br>
                        <input
                            className={!password ? '' : 'activeInput'}
                            value={password}
                            autoComplete="off"
                            onChange={(e)=> setPassword(e.target.value)}
                            type="password" 
                            name="password"
                        />

                        <div className="credentials">
                        <Link to="/retrievePassword"><span id="linkCadaster">Esqueci minha senha</span></Link>
                        <a href="#"><span id="linkCadaster">Cadastre-se</span></a>

                        </div>


                        <button type="submit">Entrar</button>
                        <Link to="/register"><small>Don't you have an account? Register now!</small></Link>
                        
                    </div>

                </form>
            </div>
        </div>
        
    )
}

export default LoginPage;