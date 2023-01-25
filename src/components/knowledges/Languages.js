import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state = {
        languages: [
            { id: 1, value: "C#", xp: 1.6 },
            { id: 2, value: "Android", xp: 1.2 },
            { id: 3, value: "HTML/CSS", xp: 1.8 },
            { id: 4, value: "Javascript", xp: 0.4 },
            { id: 5, value: "Flutter", xp: 1.2 }
        ],
        frameworks: [
            { id: 1, value: "Bootstrap", xp: 1.6 },
            { id: 2, value: "Unity", xp: 1.4 },
            { id: 3, value: "React", xp: 0.6 },
            { id: 4, value: "WinForm", xp: 0.8 }
        ]
    }

    render() {

        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & outils"
                    className="frameworksDisplay" />
            </div>
        );
    }
}

export default Languages;