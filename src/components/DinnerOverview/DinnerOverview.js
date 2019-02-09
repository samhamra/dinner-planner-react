import React, {Component} from 'react';
import './DinnerOverview.css';
import '../App/App.css';
import {modelInstance} from '../../data/DinnerModel';
import {Link} from 'react-router-dom';
export default class DinnerOverview extends Component {
  
  constructor() {
    super();    
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
    let menu = this.state.menu.map(dish => {
      return (
        <div className="col-xs-12 col-sm-3 dish-item-print" key={dish.id}>
          <img alt="dish" className="dish-image" src={dish.image}></img>
          <p className="dish-name">{dish.title}</p>
          <p className="dish-price">{dish.extendedIngredients.length * this.state.numberOfGuests + " SEK"}</p>
        </div>
      )
    })
    
      
    
    return (
      <div className="col-xs-12 container-fluid" id="dinnerOverView">
        <div className="row" >
          <div className="col-xs-12 col-sm-9 container-fluid">
            <div className="row" id="selected-menu">
              {menu}
            </div>
          </div>
          <div className="col-xs-12 col-sm-3 price-column">
            <hr className="divider mobile"/>
            <p className="total-price">Total: {modelInstance.getTotalMenuPrice()} SEK</p>
          </div>
        </div>
        <hr className="divider"/>
        <div className="row">
          <div className="col-xs-12 center">
            <Link to="/overview/print">
              <button id="print-button" className="button center" type="button" name="button">
                Print full recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
    
  }
}