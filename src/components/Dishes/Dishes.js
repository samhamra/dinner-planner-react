import React, {Component} from 'react';
import './Dishes.css';
import '../App/App.css';
import {modelInstance} from '../../data/DinnerModel';
import {Link} from 'react-router-dom';


export default class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL'
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance.getAllDishes("", "").then(dishes => {
      console.log(dishes);
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
      console.log(this.state.dishes);
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
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
          <div className="col-xs-12 col-sm-4 col-md-3 dish-item" id={'dish-'+dish.id} key={'dish-'+dish.id}>
          <Link to={"/detailView/" + dish.id}>
            <img alt="dish" className="dish-image" src={'https://spoonacular.com/recipeImages/'+ dish.image}/>
            <p className="dish-name">{dish.title}</p>
          </Link>
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
