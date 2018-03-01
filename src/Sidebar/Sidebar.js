import React, { Component } from 'react';
import './Sidebar.css';
class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
  }

  componentDidMount() {
    this.props.model.addObserver(this)
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  handleChange = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
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
