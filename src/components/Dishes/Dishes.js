import React, {Component} from 'react';
import './Dishes.css';
import '../App/App.css';
import {modelInstance} from '../../data/DinnerModel';

export default class Dishes extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL'
    }
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.filter !== prevProps.filter | this.props.type !== prevProps.type) {
      this.fetchData();
    }
  }
  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  
  fetchData() {
    modelInstance.getAllDishes(this.props.type, this.props.filter).then(dishes => {
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }
  
  componentDidMount() {
    console.log("didmount");
    // when data is retrieved we update the state
    // this will cause the component to re-render
    this.fetchData();
  }

  render() {
    let dishesList = null;
    
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
        dishesList = <em>Loading...</em>
        break;
      case 'LOADED':
        dishesList = this.state.dishes.map((dish) =>
          <div className="col-xs-12 col-sm-4 col-md-3 dish-item" key={'dish-'+dish.id}>
              <img alt="dish" onClick={this.props.setDish} id={dish.id} className="dish-image" src={'https://spoonacular.com/recipeImages/'+ dish.image}/>
              <p className="dish-name">{dish.title}</p>
          </div>
        )
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="container-fluid col-xs-12">
        <div className="row">
            {dishesList}
          </div>
      </div>
      
    )
  }
}
