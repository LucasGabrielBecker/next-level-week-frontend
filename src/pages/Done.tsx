import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "../styles/pages/done.css"
import girlDoneImg from "../images/girl_done.svg"

function Done(){
    return(
        <div className="container">
            <div className="content">

                <h2>Ebaaa!</h2>
                <h4>O cadastro deu certo e foi enviado ao administrador para ser aprovado.</h4>
                    <h4>Agora é só esperar! :)</h4>

                    <Link to="/app">
                        <div className="btn-goBack">
                            <span>Voltar para o mapa</span>
                        </div>
                    </Link>
            </div>
            <div className="splash-image">
                <img src={girlDoneImg} alt="Little Girl"/>
            </div>
        </div>
      
    )
}

export default Done;