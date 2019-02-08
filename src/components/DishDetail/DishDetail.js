import React, {Component} from 'react';
import './DishDetail.css';
import '../App/App.css';
import DishIngredients from '../DishIngredients/DishIngredients'
import {modelInstance} from '../../data/DinnerModel';

export default class DishDetail extends Component {
  constructor(props) {
    super()
    console.log(props);
    this.state = {
      status: 'INITIAL',
      data: {}
    }
  }
  
  componentDidMount() {
    Promise.all([
      modelInstance.getDish(this.props.id), 
      modelInstance.getDishSummary(this.props.id)
    ]).then(data => {
      data[0].summary = data[1].summary.replace(/(<\/?b>)/g,'')
      this.setState({
        status: 'LOADED',
        data: data[0]
      })
      
    }).catch(() => {
      console.log("error");
      this.setState({
        status: 'ERROR'
      })
    })
    
  }
  
  render() {
    console.log(this.state.data.extendedIngredients);
    return (
      <div className="col-xs-12 col-sm-10 container-fluid" id="dishDetailView">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="dish">
              <h2 id="dish-name">{this.state.data.title}</h2>
              <figure>
                <img src={this.state.data.image} className="detail-image" id="dish-image" alt=""/>
                <figcaption id="dish-description">{this.state.data.summary}</figcaption>
              </figure>
              <h2>Preparation</h2>
              <p id="dish-preparation">{this.state.data.instructions}</p>
              <button onClick={this.props.toggleScreen} id="back-button" className="button" type="button" name="previous">Back to search</button>
            </div>
          </div>
          <DishIngredients ingredients={this.state.data.extendedIngredients}/>
        </div>
      </div>
    )
  }
}