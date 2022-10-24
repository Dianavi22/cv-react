import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
           <h1 className="paddingNoFound">Désolée, cette page n'existe pas</h1> 
           <NavLink exact to="/home">
            <i className="fas fa-home"></i>
            <span>Accueil</span>
           </NavLink>
           </div>
        </div>
    );
};

export default NotFound;