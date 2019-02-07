import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { modelInstance } from '../../data/DinnerModel'
import '../App/App.css';
import './Main.css'
import Welcome from '../Welcome/Welcome'
import ShoppingScreen from '../ShoppingScreen/ShoppingScreen'
export default class Main extends Component {

  render() {
    console.log(modelInstance);
    return (
      <div className="container-fluid">
        <div className="row">
          <Route exact path="/" component={Welcome}/>  
          <Route exact path="/shop" component={ShoppingScreen}/>
        </div>
      </div> 
    )
  }
}