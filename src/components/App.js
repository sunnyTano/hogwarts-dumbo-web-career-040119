import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './hogContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav
            
           />
          <HogContainer 
            hogs={hogs}/>
      </div>

    )
  }
}

export default App;
