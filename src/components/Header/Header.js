import React, { Component } from 'react';
import '../App/App.css';
export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
    }
  }
  
  render() {  
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
              <h1 id="title-text">{this.state.title}</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}