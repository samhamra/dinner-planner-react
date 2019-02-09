import React, {Component} from 'react';
import './DishIngredients.css';
import '../App/App.css';
import {modelInstance} from '../../data/DinnerModel';
import {Link} from 'react-router-dom';
export default class DishIngredients extends Component {
  constructor(props) {
    super()
    this.state = {
      numberOfGuests: modelInstance.getNumberOfGuests()
    }
  }
  
  componentDidMount() {
    modelInstance.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update(code) {
    if(code === 0) {
      this.setState({numberOfGuests: modelInstance.getNumberOfGuests()})
    }
  }
  
  componentDidUpdate() {
  }
  
  render() {
    return (
      <div className="col-xs-12 col-sm-6 nopadding">
        <table id="ingredient-list">
          <thead>
            <tr>
              <th colSpan="6">
                <p id="ingredients-header"><b>INGREDIENTS FOR <span id="numberOfGuests">{this.state.numberOfGuests}</span> PEOPLE</b></p>
              </th>
            </tr>
            <tr>
              <td colSpan="6">
                <hr/>
              </td>
            </tr>
          </thead>
          <tbody>
            { this.props.ingredients
              ?  this.props.ingredients.map((ingredient) => {
                  return (
                    <tr className="recipe-data" key={ingredient.id}>
                      <td>{ingredient.amount*this.state.numberOfGuests}</td>
                      <td>{ingredient.unit}</td>
                      <td>{ingredient.name}</td>
                      <td>SEK</td>
                      <td>{this.state.numberOfGuests}</td>
                    </tr>
                  )
                })
              : <tr></tr>    
            }
            <tr>
              <td colSpan="6">
                <hr/>
              </td>
            </tr>
            <tr>
              <td>
                <Link to={"/search"}>
                  <button id="add-button" onClick={this.props.addDish} className="button" type="button" name="add-to-menu">Add to Menu</button>
                </Link>  
              </td>
              <td/>
              <td/>
              <td>SEK</td>
              <td id="totalPriceTag">{this.props.ingredients && this.state.numberOfGuests*this.props.ingredients.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}