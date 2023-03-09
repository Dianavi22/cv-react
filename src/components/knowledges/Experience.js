import React from 'react';

const Experience = () => {
    return (
        <div className="experience">

            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Apprentie développeuse - Ministère de l'intérieur</h4>
                <h5>2022 - 2023</h5>
                <p>Mes missions au sein du ministère de l'intérieur consistent en premier lieu à créer une application afin que les utilisateurs puissent s'organiser pour les différentes activités annuelles, cette application sera faire en reactJS avec les données en SQL, aussi je devrai utiliser Joomla afin de corriger quelques bugs et de rajouter des features sur l'intranet</p>
            </div>

            <div className="exp-2">
                <h4>Apprentie développeuse - Spie batignolles</h4>
                <h5>2019 - 2021</h5>
                <p>Lors de mon alternance chez spie batignolles j'avais 2 missions principales : la programmation du site web (<a href="https://www.spiebatignollesimmobilier.fr/" target="_blank">spiebatignollesimmobilier.fr</a>) et de son back office en C#, HTML/CSS, et la base de données en SQL ainsi que toute la gestion ds demandes d'ajout de fonctionnalités et de résolution de bugs. Et la gestion des comptes pour l'outil DocuSign, ainsi qu la formation des diférents utilisateurs.</p>

            </div>

        </div>
    );
};

export default Experience;