/**
 * Here just show us, wuthout try the code.
 * How you go to fixe and improuve this components
 * 
 * and say what is wrong with him 
 */

import React, { Component } from 'react'

export default class App extends Component {  
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name || 'Anonymous'
      }
    }    

    render() {
      return (
        <p>Hello {this.state.name}</p>
      );  
    }
  }