import React, {Component} from 'react';
import './DinnerPrint.css';
import '../App/App.css';
import {modelInstance} from '../../data/DinnerModel';
export default class DinnerPrint extends Component {
  
  constructor(props) {
    super()
    this.state = {
      menu: modelInstance.getMenu()
    }
  }
  
  componentDidMount() {
    modelInstance.addObserver(this)
  }


  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

  update(code) {
    if(code === 1) {
        this.setState({menu: modelInstance.getMenu()})
    }
  }
  
  render() {
    let menu = this.state.menu.map(dish => {
      return (
        <div class="row margin-bottom">
          <div class="col-xs-12 col-sm-2">
            <img class="myimage" src={dish.image} alt=""/>
          </div>
          <div class="col-xs-12 col-sm-5">
            <div class="side-pad">
              <h4 class="description-header">{dish.title}</h4>
              <p>{dish.summary}</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5">
            <div class="side-pad">
              <h4 class="description-header">Preparation</h4>
              <p>{dish.instructions ? dish.instructions : "Instructions missing for this recipe"}</p>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="col-xs-12 container-fluid" id="dinnerPrintView">
        {menu}
      </div>
    )
  }
}