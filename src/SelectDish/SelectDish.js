import React, {Component} from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';

class SelectDish extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
        <Sidebar model={this.props.model}/>
          <div className="col-xs-12 col-sm-10 container-fluid" id="dishSearchView">
            <div className="row">
              <div className="col-xs-4 col-sm-3">
                <h2>Find a dish</h2>
              </div>
              <div className="col-xs-4 col-sm-3">
                <input id="search-input" type="text" name="firstname" placeholder="Enter Key Words"/>
              </div>
                <div className="col-xs-4 col-sm-3">
                  <select name="types" id="select-type">
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
                </div>
                <div className="col-xs-12 col-sm-3">
                  <button id="search-button" className="button center" type="button" name="button">Search</button>
                </div>
              </div>
            </div>
      </div>
    </div>
      );
  }
}

export default SelectDish;