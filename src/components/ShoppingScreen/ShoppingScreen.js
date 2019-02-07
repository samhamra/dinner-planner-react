import React, {Component} from 'react';
import '../App/App.css';
import Sidebar from '../Sidebar/Sidebar';
import SelectDish from '../SelectDish/SelectDish';

export default class ShoppingScreen extends Component {
  
  render() {
    return (
      <div className="col-xs-12 container-fluid">
        <div className="row">
          <Sidebar/>
          <SelectDish/>
        </div>
      </div>
    )
  }
}

