import React, { Component } from 'react';
import './App.css';
import './Banner.css'

class App extends Component {

	
  render() {
    return (
      <div className="App">
      	<div className="Banner"> 4 Year Degree</div>
        
        {this.props.children}
      </div>
    );
  }
}

export default App;
