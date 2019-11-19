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

    static renderProjects(projects) {
        return(
            <Project
                img={"https://alebank.pl/wp-content/uploads/2019/10/IT-AdobeStock_200146317-autor-Gorodenkoff.jpg"}
                paragraph="lorem ipsum..." />
        )
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Projects.renderProjects(this.state.projects);

        return (
            <div class="projects">
                {contents}
            </div>
        )
    }
    async populateProjectsData() {
        const response = await fetch('projects');
        const data = await response.json();
        this.setState({ projects: data, loading: false });
    }
}