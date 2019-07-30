import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Intro from './components/Intro'
// import About from './components/about'
// import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
          <div id="colorlib-main">
            <Intro></Intro>
            {/* <About></About> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;