/**
 * Can you explain the differences between all those ways
 * of passing function to a component?
 *
 * What happens when you click each of the buttons?
 */
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.name = 'MyComponent';

        this.handleClick2 = this.handleClick1.bind(this);
      }

      handleClick1() {
        alert(this.name);
      }

      handleClick3 = () => alert(this.name);

    render() {
        return (
          <div>
            <button onClick={this.handleClick1()}>click 1</button>
            <button onClick={this.handleClick1}>click 2</button>
            <button onClick={this.handleClick2}>click 3</button>
            <button onClick={this.handleClick3}>click 4</button>
          </div>
        );
      }
}


/**
 * Your answer here
- a function is passed in parameter so an alert will appear with the name
- a reference of the function is passed in parameter so this not exists so this.name = undefined
- this.handleClick2 = this.handleClick1.bind(this)  sothis.name is know
- handleCLick3 is arrow functon so he knows this from level above
 */
