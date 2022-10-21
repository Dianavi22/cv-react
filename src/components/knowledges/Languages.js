import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state= {
        languages:[
            {id:1, value: "C#", xp:2},
            {id:2, value: "Android", xp:1.2},
            {id:3, value: "HTML/CSS", xp:1.5},
            {id:4, value: "Javascript", xp:0.4}
        ],
        frameworks:[
            {id:1, value: "Bootstrap", xp:1.5},
            {id:2, value: "Unity", xp:1.4},
            {id:3, value: "React", xp:1.1},
            {id:4, value: "Angular", xp:0.8}
        ]
    }

    render() {

        let{languages, frameworks} = this.state;

        return (
          <div className="languagesFrameworks">
            <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="languages"
            />
            <ProgressBar
            languages={frameworks}
            title="frameworks & bibliothèques"
            className="frameworksDisplay"/>
          </div>
        );
    }
}

export default Languages;