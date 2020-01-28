import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import { MyProvider, MyContext} from './context';

import registerServiceWorker from './serviceWorker';

// import About from './components/about'
// import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
        {(context) => (
        
          <div id="colorlib-page">
            <div id="container-wrap">
              <Sidebar></Sidebar>
              <div id="colorlib-main">
                
                  <Intro></Intro>

              </div>
            </div>
          </div>
        )}

        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;