import React from 'react';

const Hobbies = () => {
    return (
       
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                <li className="hobby">
                    <i className="fas fa-dice-d20 delivery-icon"></i>
                     <span>JDR</span>
                     </li>
                <li className="hobby">
                    <i className="fa-solid fa-earth-asia"></i>
                <span>Culture japonaise</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-film">
                    </i> <span>Cinéma</span>
                    </li>
                <li className="hobby">
                    <i className="fa-solid fa-dice">
                    </i> <span>Warhammer 40K</span>
                    </li>
                    <li className="hobby">
                    <i className="fa-solid fa-heart-pulse">
                    </i> <span>Escalade</span>
                    </li>
            </ul>
            </div>
      
    );
};

export default Hobbies;