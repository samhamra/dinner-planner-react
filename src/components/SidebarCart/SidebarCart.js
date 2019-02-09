import React, {Component} from 'react';
import './Sidebar.css';
import '../App/App.css';
import SidebarCart from '../SidebarCart/SidebarCart';
import {modelInstance} from '../../data/DinnerModel';
export default class SidebarCart extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="d-none d-sm-block hide">
        <div id="cart-container">
          <div className="cart-header-row">
            <p className="cart-header-cell">Dish Name</p>
            <p className="cart-header-cell">Cost</p>
          </div>
          <div id="total-price-container">
            <p className="cart-cell"></p>
            <p className="cart-cell">SEK
              <span id="total-price-tag"></span>
            </p>
          </div>
        </div>
        <div className="pad">
          <button id="confirm-button" className="button blur center" type="button" name="button">Confirm Dinner</button>
        </div>
      </div>
    )
  }
  
}