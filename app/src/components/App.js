import React, { Component } from 'react';
import Nav from './Nav'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
  
}

export default App;
