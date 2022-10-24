import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
<Navigation/>
<div className="contactContent">
    <div className="header"></div>
    <div className="contactBox">
        <h1>Contactez-moi</h1>
        <ul>
            <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Paris</span>
            </li>
            <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0663370152">
                <span className="clickInput" onClick={() => {alert('Téléphone copié');}}>06 63 37 01 52</span>
                </CopyToClipboard>
            </li>
            <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="jbouiges@gmail.com">
                <span className="clickInput" onClick={() => {alert('Email copié');}}>jbouiges@gmail.com</span>
                </CopyToClipboard>
            </li>
        </ul>
    </div>
    <div className="socialNetwork">
        <ul>
            <a href="https://github.com/Dianavi22" target="_blank"
            rel="noopener norenferrer">
                <h4>Github</h4>
                <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jade-bouiges-developpeur-web-mobile-alternance/" target="_blank"
            rel="noopener norenferrer">
                <h4>Linkedin</h4>
                <i className="fab fa-linkedin"></i>
                </a>
                {/* <a href="http://www.google.com" target="_blank"
            rel="noopener norenferrer">
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
                </a> */}
                <a href="./media/CV.pdf" target="blank" rel="noopener noreferrer"><h4>CV</h4><i className="fa-solid fa-file-pdf"></i></a>
        </ul>
    </div>
</div>
        </div>
    );
};

export default Contact;