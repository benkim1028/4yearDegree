import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>4 Year Degree</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
