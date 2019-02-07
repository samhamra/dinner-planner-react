import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel'
import SelectDish from "./SelectDish/SelectDish";
import Sidebar from "./Sidebar/Sidebar"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
    }
  }

  render() {
    const SearchScreen = () => (
      <div className="col-xs-12 container-fluid">
        <div className="row">
          <Sidebar/>
          <SelectDish/>
        </div>
      </div>
    )
    
    const Child = ({ match }) => (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
);
    
    
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
              <Route path="/search" component={SearchScreen}/>
            <Route path="/detailView/:id" component={Child}/>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;
