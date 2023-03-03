import React from 'react';
import { NavLink } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="https://Dianavi22.github.io/cv-react/src/media/jado.jpg" alt="profil-pic" />
                    <h3>
                        Jade BOUIGES
                    </h3>
                </div>
            </div>



            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/cv-react" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-image"></i>
                            <span>Portefolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jade-bouiges-developpeur-web-mobile-alternance/" target="blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/Dianavi22" target="blank" rel="noopener noreferrer"><i className="fab fa-git"></i></a>
                    </li>
                    <li>
                        <CopyToClipboard text="jbouiges@gmail.com">
                            <a onClick={() => { alert('Email copié'); }} rel="noopener noreferrer"><i className="far fa-envelope"></i></a>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <a href="./media/CV.pdf" target="blank" rel="noopener noreferrer"><i className="fa-solid fa-file-pdf"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Kirbo - 2022
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;