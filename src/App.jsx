import Navigation from './Components/Navigation.js'
import './App.css'
import React, {Component} from 'react';

class App extends Component() {

  render(){
    return (
      <>
        <div className="container">
          <Navigation />
        </div>
      </>
    )
  }
}

export default App
