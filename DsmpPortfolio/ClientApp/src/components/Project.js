import React, { Component } from 'react';
import './Project.css';

export class Project extends Component {
    render() {
        return (
            <div class="project">
                <div class="image">
                    <img src={this.props.img} />
                </div>
                <div class="paragraf">
                    <p>{this.props.paragraph}</p>
                </div>
            </div>
        )
    }
}