import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';

import * as serviceWorker from './serviceWorker';
import { MyProvider, MyContext } from './context';

// import About from './components/about'
// import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar context='es'></Sidebar>
            <MyContext.Consumer>
              {(es) => (
                <React.Fragment>
                  <div id="colorlib-main">
                    <Intro></Intro>
                  </div>
                </React.Fragment>
              )}
            </MyContext.Consumer>
          </div>
        </div>
      </MyProvider>
    );
  }
}


export default App;