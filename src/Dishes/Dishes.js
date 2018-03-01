import React, {Component} from 'react';
import './Dishes.css';
import {getAllDishes} from '../DishesAPI';


class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INITIAL'
    }
  }

  componentDidMount = () => {
    getAllDishes().then(dishes => {
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

  render() {
    let dishes = null;
    switch (this.state.status) {
      case 'INITIAL':
        dishes = <em>Loading...</em>
        break;
      case 'LOADED':
        dishes = this.state.dishes.map((dish) =>
          <li key={dish.id}>{dish.title}</li>
        )
        break;
      default:
        dishes = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="Dishes">
        <h3>Dishes</h3>
        <ul>
          {dishes}
        </ul>
      </div>
    );
  }
}

export default Dishes;
