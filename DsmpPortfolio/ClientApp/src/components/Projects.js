import React, { Component } from 'react';
import { Project } from './Project';
import './Projects.css';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [], isLoading: true };
    }

    componentDidMount() {
        this.populateProjectsData();
    }

    static renderProjects(newProjects) {
        let imgOnRight = false;
        return (
            <div className="projects">
                {newProjects.map(p =>
                    <Project
                        img={"https://alebank.pl/wp-content/uploads/2019/10/IT-AdobeStock_200146317-autor-Gorodenkoff.jpg"}
                        paragraph={p}
                        isRightImg={imgOnRight = !imgOnRight} />
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.isLoading
            ? <p><em>Loading projects...</em></p>
            : Projects.renderProjects(this.state.projects);

        return (
            <div>
                {contents}
            </div>
        )
    }
    async populateProjectsData() {
        const response = await fetch('api/projects');
        const data = await response.json();
        this.setState({ projects: data, isLoading: false });
    }
}