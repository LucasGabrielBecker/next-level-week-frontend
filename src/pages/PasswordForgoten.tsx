import React, { Fragment, useState } from 'react';
import LoginLogo from '../images/Logotipo.svg'
import "../styles/pages/forgotenPassword.css"
import {FiArrowLeft} from "react-icons/fi"
import { Link } from 'react-router-dom';

function PasswordForgoten(){
    const [email, setEmail] = useState('')
    const [senhaEnviada, setSenhaEnviada] = useState(false)
    const [senha, setSenha] = useState('')
    const [novaSenha, setNovaSenha] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setSenhaEnviada(!senhaEnviada)
    }
    
    return(
        <div className="login-container">
            <div className="left-panel">
                <img src={LoginLogo} alt="Logo happy"/>
                <div className="location">
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </div>
            </div>
            <div className="right-panel">
                <Link to="/login">
                    <div className="goback-button">
                        <FiArrowLeft size={25} color="#15C3D6" />
                    </div>
                </Link>
                <form onSubmit={handleSubmit} className="form-content">

                    {!senhaEnviada ? (
                        <Fragment>
                        <div className="input-data">
                        <h2>Esqueci a senha</h2>
                        <span>Sua redefinição de senha será enviada para o email cadastrado</span>
                        <p>Email</p><br></br>

                        <input
                            className={!email ? '' : 'activeInput'}
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            autoComplete="off"
                            type="email"
                            name="email"/><br/>
                    </div>
                        <button type="submit" className={!email ? '' : 'activeButton'}>Enviar</button>
                        </Fragment>
                    ) : (
                        <Fragment>
                        <div className="input-data">
                            <h2>Redefinição de senha</h2>
                            <span>Escolha uma nova senha para você acessar o dashboard do Happy</span>
                            
                            <p>Nova senha</p><br></br>
                            <input
                                value={senha}
                                onChange={(e)=> setSenha(e.target.value)}
                                autoComplete="off"
                                type="password"
                                name="password"/><br/>

                            <p>Repetir nova senha</p><br></br>
                            <input
                                value={novaSenha}
                                onChange={(e)=> setNovaSenha(e.target.value)}
                                autoComplete="off"
                                type="password"
                                name="passwod"/><br/>
                        </div>
                            <button type="submit" id="btnNovasenha" className={!novaSenha ? '' : 'activeButton'}>Enviar</button>                        
                            </Fragment>
                    )}
                    



                </form>
            </div>
        </div>
        
    )
}

export default PasswordForgoten;