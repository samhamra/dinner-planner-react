import React, { Component } from 'react';
import './Sidebar.css';
import { model } from '../data/DinnerModel'

class Sidebar extends Component {

  constructor() {
    super()
    this.state = {
      numberOfGuests: model.getNumberOfGuests()
    }
  }

  componentDidMount() {
    model.addObserver(this)
  }

  componentWillUnmount() {
    model.removeObserver(this)
  }

  update() {
    this.setState({
      numberOfGuests: model.getNumberOfGuests()
    })
  }

  handleChange = (e) => {
    model.setNumberOfGuests(+e.target.value)
  }

  render() {
    return (
      <div className="Sidebar">
        <h3>This is the sidebar</h3>
        <p>
        People: <input value={this.state.numberOfGuests} onChange={this.handleChange}/>
        <br/>
        Total number of guests: {this.state.numberOfGuests}
        </p>
      </div>
    );
  }
}

export default Sidebar;
