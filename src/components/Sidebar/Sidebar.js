import React, {Component} from 'react';
import './Sidebar.css';
import '../App/App.css';
import SidebarCart from '../SidebarCart/SidebarCart';
import {modelInstance} from '../../data/DinnerModel';
export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    console.log("Skapat en sidebar");
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: modelInstance.getNumberOfGuests()
    }
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    modelInstance.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update(code) {
    if(code === 0) {
      this.setState({numberOfGuests: modelInstance.getNumberOfGuests()})
    }
    if(code === 1) {
      
    }
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    modelInstance.setNumberOfGuests(e.target.value)
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-2 container-fluid" id="sideBarView">
        <div className="row">
          <div className="col-xs-12 menu">
            <div className="dinner-planner">
              <p id="dinner-text">My Dinner<span id="expand-button" className="d-sm-none fa fa-bars right"></span>
                <span className="d-sm-none right sidebar-price"></span>
              </p>
              <div className="d-none d-sm-block hide">
                People: {this.state.numberOfGuests}
                <input className="guest-input" onChange={this.onNumberOfGuestsChanged}/>
              </div>
            </div>            
          </div>
        </div>
      </div>
    )
  }
}
