import React, {Component} from 'react';
import './DishDetail.css';
import '../App/App.css';
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
      console.log("data has been gotten yo");
      data[0].summary = data[1].summary.replace(/<\/?b>/g,'')
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
        </div>
      </div>
    )
  }
}