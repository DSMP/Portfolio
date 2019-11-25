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
                <div class="container-fluid second">
                    <h1 class="display-3 text-monospace text-center">
                        Mobile App?
              </h1>
                </div>
                <div class="container-fluid third">
                    <h1 class="display-3 text-monospace text-center">
                        Web App?
              </h1>
                </div>
                <div class="container-fluid fourth">
                    <h1 class="display-3 text-monospace text-center">
                        Desktop app?
              </h1>
                </div>
                <div class="container-fluid fifth">
                    <h1 class="display-3 text-monospace text-center">
                        Other solution?
              </h1>
                </div>
            </div>
        );
    }
}
