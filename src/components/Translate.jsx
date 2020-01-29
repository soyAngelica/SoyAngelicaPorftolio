import React, { Component } from "react";
import { LocaleContext } from "../context";


import en from "../translations/en.json";
import es from "../translations/es.json";

export default class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: {
        en,
        es
      }
    };
  }
  render() {
      const {langs} = this.state 
      const {string} = this.props
    return (
      <LocaleContext.Consumer>
        {value => langs[value][string]}
      </LocaleContext.Consumer>
    );
  }
}
