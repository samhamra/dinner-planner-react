import React, {Component} from 'react';
import './SearchDish.css';
import '../App/App.css';
import Dishes from '../Dishes/Dishes';

export default class SearchDish extends Component {
  constructor(props) {
    console.log("SearchDish constructor");
    super()
    this.state = {
      filter: "",
      type: ""
    }
    this.selectHandler = this.selectHandler.bind(this);
    this.setSearchString = this.setSearchString.bind(this);
  }
  
  selectHandler(e) {
    this.setState({
      type: e.target.selectedOptions[0].value
    })
  }
  
  setSearchString(e) {
    e.preventDefault();
    this.setState({
      filter: e.target.elements[0].value
    })
  }
  
  render() {
    return (
          <div className="col-xs-12 col-sm-10" id="dishSearchView">
            <div className="row">
              <div className="col-xs-12 col-sm-4 offset-sm-4">
                <h2 id="dish-search-header">Find a dish</h2>
              </div>
            </div>
            <div className="row padded-row">
              <div className="col-xs-12">
                <form onSubmit={this.setSearchString} id="search-form">
                  <input id="search-input" type="text" placeholder="Enter Key Words"/>
                  <select onChange={this.selectHandler} name="types" id="select-type">
                    <option value="">All</option>
                    <option value="main course">main course</option>
                    <option value="side dish">side dish</option>
                    <option value="dessert">dessert</option>
                    <option value="appetizer">appetizer</option>
                    <option value="salad">salad</option>
                    <option value="bread">bread</option>
                    <option value="breakfast">breakfast</option>
                    <option value="soup">soup</option>
                    <option value="beverage">beverage</option>
                    <option value="sauce">sauce</option>
                    <option value="drink">drink</option>
                  </select>
                </form>
                <button id="search-button" className="button" type="submit" form="search-form" value="Submit">Search</button>
              </div>
            </div>
            <div className="row">
              <Dishes setDish={this.props.setDish} filter={this.state.filter} type={this.state.type}/>
            </div>
          </div>
      );
  }
}
