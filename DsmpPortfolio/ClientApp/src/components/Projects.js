import React, { Component } from 'react';
import { Project } from './Project';
import './Projects.css';

export class Projects extends Component {
    render() {
        return (
            <div class="projects">
                <Project
                    img={"https://alebank.pl/wp-content/uploads/2019/10/IT-AdobeStock_200146317-autor-Gorodenkoff.jpg"}
                    paragraph="lorem ipsum..."/>
            </div>
        )
    }
}