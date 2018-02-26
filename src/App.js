import React, { Component } from 'react';
import './App.css';
import YoutubeContainer from './containers/YoutubeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <YoutubeContainer />
      </div>
    );
  }
}

export default App;
