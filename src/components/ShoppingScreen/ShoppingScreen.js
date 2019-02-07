import React, {Component} from 'react';
import '../App/App.css';
import './ShoppingScreen.css';
import Sidebar from '../Sidebar/Sidebar';
import SelectDish from '../SelectDish/SelectDish';
import DishDetail from '../DishDetail/DishDetail';
export default class ShoppingScreen extends Component {
  
  constructor(){
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
          { this.state.dishSearch 
            ? <SelectDish setDish={this.setDishId} />
            : <DishDetail toggleScreen={this.toggleScreen} id={this.state.dishId}/>
          }
        </div>
      </div>
    )
  }
}

