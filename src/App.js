import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import SelectDish from './SelectDish/SelectDish';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
      numberOfGuests: 4
    }
  }
  
  setNumberOfGuests = (num) => {
    this.setState({
      numberOfGuests: num
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          <Route exact path="/" component={Welcome}/>
          <Route path="/search" render={(props)=>(<SelectDish numberOfGuests={this.state.numberOfGuests} setGuestsHandler={this.setNumberOfGuests}/>)}/>
        </header>
      </div>
    );
  }
}

export default App;
