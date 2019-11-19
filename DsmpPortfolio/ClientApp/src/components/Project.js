import React, { Component } from 'react';
import './Project.css';

export class Project extends Component {
    render() {
        let floating = this.props.isRightImg ? { float:'right' } : { float:'left' };
        if (floating == null) {
            floating = {float:'left'};
        }
        return (
            <div class="project">
                <div class="image" style={floating}>
                    <img src={this.props.img} />
                </div>
                <div class="spacer" style={floating} />
                <div class="paragraf">
                    <p>{this.props.paragraph}</p>
                </div>
            </div>
        )
    }
}