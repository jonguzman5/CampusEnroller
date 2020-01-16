import React, { Component } from 'react';
import Campuses from './Campuses/Campuses'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Campuses></Campuses>
      </div>
    );
  }

}

export default App;
