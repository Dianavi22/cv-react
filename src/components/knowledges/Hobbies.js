import React from 'react';

const Hobbies = () => {
    return (
       
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                     <span>JDR</span>
                     </li>
                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                <span>mangas</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin">
                    </i> <span>Cinema</span>
                    </li>
                <li className="hobby">
                    <i className="fas fa-rocket">
                    </i> <span>W40K</span>
                    </li>
            </ul>
            </div>
      
    );
};

export default Hobbies;