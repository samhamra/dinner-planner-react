import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel'
import SelectDish from "./SelectDish/SelectDish";

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
        <header>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
                <h1 id="title-text">{this.state.title}</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container-fluid main-container">
          <div className="row">
            <Route exact path="/" component={Welcome}/>
            <Route path="/search" render={() => <SelectDish model={modelInstance}/>}/>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;
