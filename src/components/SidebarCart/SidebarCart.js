import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SidebarCart.css';
import '../App/App.css';
import {modelInstance} from '../../data/DinnerModel';
export default class SidebarCart extends Component {
  constructor(props) {
    super()
    this.state = {
      menu: modelInstance.getMenu(),
      numberOfGuests: modelInstance.getNumberOfGuests()
    }
  }
  
  componentDidMount() {
    modelInstance.addObserver(this)
  }


  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

  update(code) {
    if(code === 0) {
      this.setState({numberOfGuests: modelInstance.getNumberOfGuests()})
    } else if(code === 1) {
        this.setState({menu: modelInstance.getMenu()})
    }
  }
  
  
  render() {
    var cartItems = this.state.menu.map(dish => {
      return (
        <div className="cart-data-row" key={dish.id}>
          <p className="cart-cell">{dish.title}</p>
          <p className="cart-cell">{dish.extendedIngredients.length * this.state.numberOfGuests + " SEK"}</p>
        </div>
      )
    });
    
    return (
      <div className="d-none d-sm-block hide">
        <div id="cart-container">
          <div className="cart-header-row">
            <p className="cart-header-cell">Dish Name</p>
            <p className="cart-header-cell">Cost</p>
          </div>
          {cartItems}
          <div id="total-price-container">
            <p className="cart-cell"></p>
            <p className="cart-cell">
              {modelInstance.getTotalMenuPrice() + " SEK"}
            </p>
          </div>
        </div>
        <div className="pad">
        { 
          this.state.menu.length===0
          ?  <button id="confirm-button" className="button blur center">Confirm Dinner</button>
          : <Link to={'/overview'}>
              <button id="confirm-button" className="button center">Confirm Dinner</button>
            </Link>
        }
        </div>
      </div>
    )
  }
  
}