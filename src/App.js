import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import SelectDish from './SelectDish/SelectDish';
// In order to initialize the model
import _ from './data/DinnerModel'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
          <Route exact path="/" component={Welcome}/>
          <Route path="/search" component={SelectDish}/>
        </header>
      </div>
    );
  }
}

export default App;
