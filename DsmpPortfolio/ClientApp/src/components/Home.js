import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div>
              <div class="jumbotron">
                  <h1 class="display-3 text-monospace text-center">
                      Looking for programmer?<br />
                      Maybe some solution...
              </h1>
              </div>
              <div class="jumbotron">
                  <h1 class="display-3 text-monospace text-center">
                      Mobile App?
              </h1>
              </div>
              <div class="jumbotron">
                  <h1 class="display-3 text-monospace text-center">
                      Web App?
              </h1>
              </div>
              <div class="jumbotron">
                  <h1 class="display-3 text-monospace text-center">
                      Desktop app?
              </h1>
              </div>
              <div class="jumbotron">
                  <h1 class="display-3 text-monospace text-center">
                      Other solution?
              </h1>
              </div>
          </div>
    );
  }
}
