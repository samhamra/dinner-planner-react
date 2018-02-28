import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  handleChange = (e) => {
    this.props.setGuestsHandler(+e.target.value)
  }

  render() {
    return (
      <div className="Sidebar">
        <h3>This is the sidebar</h3>
        <p>
        People: <input value={this.props.numberOfGuests} onChange={this.handleChange}/>
        <br/>
        Total number of guests: {this.props.numberOfGuests}
        </p>
      </div>
    );
  }
}

export default Sidebar;
