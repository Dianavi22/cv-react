import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Jade BOUIGES</h1>
                    <h2>Apprentie développeuse</h2>
                    <div className="pdf">
                        <a href="https://dianavi22.github.io/cv-react/src/media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;