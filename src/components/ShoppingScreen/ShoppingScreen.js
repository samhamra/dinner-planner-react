import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import '../App/App.css';
import './ShoppingScreen.css';
import Sidebar from '../Sidebar/Sidebar';
import SearchDish from '../SearchDish/SearchDish';
import DishDetail from '../DishDetail/DishDetail';
export default class ShoppingScreen extends Component {
  
  constructor(props){
    super();
    this.state = {
      dishSearch: true,
      dishId: null
    }
    this.setDishId = this.setDishId.bind(this)
    this.toggleScreen = this.toggleScreen.bind(this)
  }
  
  setDishId(e) {
    let id = e.target.getAttribute("id");
    this.setState({dishId: id})
    this.toggleScreen()
  }
  

  toggleScreen() {
    this.setState({dishSearch: !this.state.dishSearch})
  }
  
  render() {
    return (
      <div className="col-xs-12 container-fluid">
        <div className="row">
        
          <Sidebar />
          <Route exact path="/search" component={SearchDish}/>
          <Route exact path="/search?filter=:filter&type=:type" component={SearchDish}/>
          <Route exact path="/search/dish-:id" component={DishDetail}/>

        </div>
      </div>
    )
  }
}

