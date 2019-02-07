import React, {Component} from 'react';
import './Sidebar.css';
class Sidebar extends Component {

  constructor(props) {
    super(props)

    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({numberOfGuests: this.props.model.getNumberOfGuests()})
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+ e.target.value)
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
                People:
                <input value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged}/>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;
