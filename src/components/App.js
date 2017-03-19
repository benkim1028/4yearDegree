import React, { Component } from 'react';
import './App.css';
import './Banner.css';
import {PageHeader} from 'react-bootstrap'

class App extends Component {
	
  render() {
    return (
      <div className="App">
      <PageHeader className="Banner"> 4 Year Degree </PageHeader>        
        {this.props.children}
      </div>
    );
  }
}

export default App;
