import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Intro from './components/Intro'
import { LocaleContext } from "./context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferredLocale: "es"
    };
  }
  changeLanguage = ({ currentTarget: { id } }) => {
    this.setState({
      preferredLocale: id
    });
  };
  render() {
    return (
      <LocaleContext.Provider value={this.state.preferredLocale}>
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar changeLanguage={this.changeLanguage} ></Sidebar>
            <div id="colorlib-main">
              <Intro></Intro>
            </div>
          </div>
        </div>
      </LocaleContext.Provider>
    );
  }
}

export default App;