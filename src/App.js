import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
          data-test="increment-button" 
          onClick={this.incrementCounter}
        >
          Increment counter
        </button>
      </div>
    );
  }
}

export default App;
