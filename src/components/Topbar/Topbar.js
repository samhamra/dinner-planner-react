import React, {Component} from 'react';
import './Topbar.css';
import '../App/App.css';
import {modelInstance} from '../../data/DinnerModel';
import {Link} from 'react-router-dom';
export default class Topbar extends Component {
  
  constructor() {
    super();
  
    this.state = {
      numberOfGuests: modelInstance.getNumberOfGuests(),
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
  }
  
  
  render() {
    return (
      <div className="col-xs-12 container-fluid" id="topBarView">
        <div className="row bot-border">
          <div className="col-xs-12 col-sm-6">
            <div className="">

            </div>
            <h3>My Dinner: {this.state.numberOfGuests} People</h3>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="right-sticky">
            <Link to="/search">
              <button id="return" className="button" type="button" name="button">
                Go back and edit Dinner
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}