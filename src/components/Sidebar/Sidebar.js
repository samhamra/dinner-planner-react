import React, {Component} from 'react';
import './Sidebar.css';
import '../App/App.css';
import SidebarCart from '../SidebarCart/SidebarCart';
import {modelInstance} from '../../data/DinnerModel';
import ReactDOM from 'react-dom';
export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfGuests: modelInstance.getNumberOfGuests(),
    }
    this.expand = this.expand.bind(this);
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
    }
  }
  
  expand() {
    let toggle = ReactDOM.findDOMNode(this).querySelectorAll('.hide');
    let price = ReactDOM.findDOMNode(this).querySelector('.sidebar-price');
    window.price = price;
    toggle.forEach(e => {
      if(e.classList.contains('d-sm-block')){
        price.hidden = true;
      } else {
        price.hidden = false;
      }
      e.classList.toggle('d-sm-block');
      e.classList.toggle('d-none');
    })
  }

  render() {
    let fullPrice = modelInstance.getTotalMenuPrice();
    return (
      <div className="col-xs-12 col-sm-2 container-fluid" id="sideBarView">
        <div className="row">
          <div className="col-xs-12 menu">
            <div className="dinner-planner">
              <p id="dinner-text">My Dinner<span onClick={this.expand} className="expand d-sm-none fa fa-bars right"></span>
                <span className="d-sm-none right sidebar-price">{ fullPrice > 0 ? fullPrice + " SEK" : ""}</span>
              </p>
              <div className="d-none d-sm-block hide">
                People: {this.state.numberOfGuests}
                  <button id="minusGuest" onClick={modelInstance.removeGuest}className="btn"><i className="fa fa-minus" aria-hidden="true"></i></button>
                  <button id="plusGuest" onClick={modelInstance.addGuest} className="btn"><i className="fa fa-plus" aria-hidden="true"></i></button>
              </div>
            </div>
            <SidebarCart/>
          </div>
        </div>
      </div>
    )
  }
}
