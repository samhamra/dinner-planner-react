import React, {Component} from 'react';
import './DishIngredients.css';
import '../App/App.css';

export default class DishIngredients extends Component {
  constructor(props) {
    super()
  }
  
  componentDidUpdate() {
    console.log("updated");
    console.log(this.props);
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-6 nopadding">
        <table id="ingredient-list">
          <thead>
            <tr>
              <th colSpan="6">
                <p id="ingredients-header"><b>INGREDIENTS FOR <span id="numberOfGuests"></span> PEOPLE</b></p>
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
                      <td className="variable-td" data-single-amount={ingredient.amount}>{ingredient.amount}</td>
                      <td>{ingredient.unit}</td>
                      <td>{ingredient.name}</td>
                      <td>SEK</td>
                      <td className="variable-td"></td>
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
              <td><button id="add-button" className="button" type="button" name="add-to-menu">Add to Menu</button></td>
              <td></td>
              <td>SEK</td>
              <td id="totalPriceTag"></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}