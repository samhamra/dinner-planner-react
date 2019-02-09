import React, { Component } from 'react';
import './App.css';
import Header from "../Header/Header"
import Welcome from '../Welcome/Welcome'
import Sidebar from '../Sidebar/Sidebar'
import SearchDish from '../SearchDish/SearchDish'
import DishDetail from '../DishDetail/DishDetail'
import DinnerOverview from '../DinnerOverview/DinnerOverview';
import DinnerPrint from '../DinnerPrint/DinnerPrint'
import Topbar from '../Topbar/Topbar';
import {Route} from 'react-router-dom';

class App extends Component {

  render() {    
    return (
      <div className="App">
        <Header/>
          <div className="container-fluid" id ="main-content">
            <div className="row">
              <Route exact path="/" component={Welcome}/>
              <Route path ="/search" component={Sidebar}/>
              <Route path ="/search" exact component={SearchDish}/>
              <Route path ="/search/dish-:id" exact component={DishDetail}/>
              <Route path ="/overview" component={Topbar}/>
              <Route path ="/overview" exact component={DinnerOverview}/>
              <Route path ="/overview/print" exact component={DinnerPrint}/>
            </div>
          </div>    
      </div>
    );
  }
}

export default App;
