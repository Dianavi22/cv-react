import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class Paginnation extends Component {

    state = {
        projects: portfolioData,
        radios: [
            { id: 1, value: "Tous" },
            { id: 2, value: "Android" },
            { id: 3, value: "Flutter" },
            { id: 5, value: "Unity" }
        ],
        selectedRadio: 'Tous'
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({ selectedRadio: radio })
    }

    render() {
        let { projects, radios, selectedRadio } = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        cheked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="projects">
                    {
                        projects.filter(item => item.languages.includes(selectedRadio)).map(item => {
                            return (
                                <Project
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Paginnation;