import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div class="container-fluid first container-padding">
                    <h1 class="display-5 text-monospace text-center">
                        Looking for solution for your company?
                    </h1>
                    <div class="row text-center myrow">
                        <div class="col">
                            <button type="button" class="btn btn-outline-primary btn-size">Solutions</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-primary btn-size">Web</button>
                        </div>
                    </div>
                    <div class="row text-center myrow">
                        <div class="col">
                            <button type="button" class="btn btn-outline-primary btn-size">Mobile</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-primary btn-size">Desktop</button>
                        </div>
                    </div>
                </div>
                <div class="container-fluid container-height second">
                    <h1 class="display-3 text-monospace text-center">
                        Mobile App Development
              </h1>
                </div>
                <div class="container-fluid container-height third">
                    <h1 class="display-3 text-monospace text-center">
                        Web Design and Development
              </h1>
                </div>
                <div class="container-fluid container-height fourth">
                    <h1 class="display-3 text-monospace text-center">
                        Simple desktop application
              </h1>
                </div>
                <div class="container-fluid container-height fifth">
                    <h1 class="display-3 text-monospace text-center">
                        Custom solutions
              </h1>
                </div>
            </div>
        );
    }
}
