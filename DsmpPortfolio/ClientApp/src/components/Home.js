import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div>
              <div class="jumbotron first">
                  <h1 class="display-3 text-monospace text-center">
                      Looking for programmer?<br />
                      Maybe some solution...
              </h1>
              </div>
              <div class="jumbotron second">
                  <h1 class="display-3 text-monospace text-center">
                      Mobile App?
              </h1>
              </div>
              <div class="jumbotron third">
                  <h1 class="display-3 text-monospace text-center">
                      Web App?
              </h1>
              </div>
              <div class="jumbotron fourth">
                  <h1 class="display-3 text-monospace text-center">
                      Desktop app?
              </h1>
              </div>
              <div class="jumbotron fifth">
                  <h1 class="display-3 text-monospace text-center">
                      Other solution?
              </h1>
              </div>
          </div>
    );
  }
}
