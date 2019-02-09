import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './DishDetail.css';
import '../App/App.css';
import DishIngredients from '../DishIngredients/DishIngredients'
import {modelInstance} from '../../data/DinnerModel';

export default class DishDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      status: 'INITIAL',
      data: {}
    }
    this.addDish = this.addDish.bind(this);
  }
  
  
  addDish() {
    modelInstance.addDishToMenu(this.state.data);
  }
  
  componentDidMount() {
    document.body.classList.add('loading'); 
    Promise.all([
      modelInstance.getDish(this.props.match.params.id), 
      modelInstance.getDishSummary(this.props.match.params.id)
    ]).then(data => {
      data[0].summary = data[1].summary.replace(/(<\/?b>)/g,'')
      this.setState({
        status: 'LOADED',
        data: data[0]
      })
      document.body.classList.remove('loading'); 
      
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
      document.body.classList.remove('loading'); 
    })
    
  }
  
  render() {
    if(this.state.status === 'ERROR') {
      return (
        <div className="col-xs-12 col-sm-10 container-fluid" id="dishDetailView">
          <h2>Failed loading data, please try again</h2>
        </div>
      )
    }
    
    return (
      <div className="col-xs-12 col-sm-10 container-fluid" id="dishDetailView">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="dish">
              <h2 id="dish-name">{this.state.status === this.state.data.title}</h2>
              <figure>
                <img src={this.state.data.image} className="detail-image" id="dish-image" alt=""/>
                <figcaption id="dish-description">{this.state.data.summary}</figcaption>
              </figure>
              <h2>Preparation</h2>
              
              <p id="dish-preparation">{this.state.data.instructions}</p>
              <Link to={'/search'}>
              <button id="back-button" className="button" type="button" name="previous">Back to search</button>
              </Link>
            </div>
          </div>
          <DishIngredients addDish={this.addDish} ingredients={this.state.data.extendedIngredients}/>
        </div>
      </div>
    )
  }
}