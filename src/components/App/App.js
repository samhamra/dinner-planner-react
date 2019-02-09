import React, { Component } from 'react';
import './App.css';
import Header from "../Header/Header"
import Welcome from '../Welcome/Welcome'
import Sidebar from '../Sidebar/Sidebar'
import SearchDish from '../SearchDish/SearchDish'
import DishDetail from '../DishDetail/DishDetail'
import {Switch, Redirect, Route } from 'react-router-dom';

class App extends Component {

  render() {    
    return (
      <div className="App">
        <Header/>
          <div className="container-fluid" id ="main-content">
            <div className="row">
              <Route exact path="/" component={Welcome}/>
              <Route path ="/search" component={Sidebar}/>
              <Route exact path ="/search" component={SearchDish}/>
              <Route exact path ="/search/dish-:id" component={DishDetail}/>
            </div>
          </div>    
      </div>
    );
  }
}

export default App;
