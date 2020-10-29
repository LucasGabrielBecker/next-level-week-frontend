import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import "../styles/pages/delete.css"
import kidImg from "../images/deleteScreenKid.svg"

function Delete(){
    return(
        <div className="container">
            <div className="content">

                <h2>Excluir!</h2>
                <h4>Você tem certeza que quer excluir</h4>

                    <Link to="/app">
                        <div className="btn-goBack">
                            <span>Voltar para o mapa</span>
                        </div>
                    </Link>
            </div>
            <div className="splash-image">
                <img src={kidImg} alt="Little Girl"/>
            </div>
        </div>
      
    )
}

export default Delete;