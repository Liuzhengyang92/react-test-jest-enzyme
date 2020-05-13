import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      errorMessage: null
    };
  }

  incrementCounter = () => {
    this.setState((state) => {
      if (state.counter === 0) {
        return {
          counter: state.counter + 1,
          errorMessage: null
        };
      } 
      return {
        counter: state.counter + 1
      };
    });
  }

  decrementCounter = () => {
    this.setState(state => {
      if (state.counter > 0) {
        return {
          counter: state.counter - 1,
          errorMessage: null,
        };
      } 
      return {
        counter: state.counter,
        errorMessage: 'the counter can\'t go below zero'
      };
    });
  } 

  doubleCounter = () => {
    this.setState(state => {
      return {
        counter: state.counter * 2
      };
    });
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <h2 data-test="counter-error-message" style={{ color: 'red' }}>{this.state.errorMessage ? this.state.errorMessage: null}</h2>
        <button 
          data-test="increment-button" 
          onClick={this.incrementCounter}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={this.decrementCounter}
        >
          Decrement counter
        </button>
        <button
          data-test="double-button"
          onClick={this.doubleCounter}
        >
          Double counter
        </button>
      </div>
    );
  }
}

export default App;
