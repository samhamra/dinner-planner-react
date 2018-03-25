import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import SelectDish from "./SelectDish/SelectDish";

export const Context = React.createContext()

class DinnerProvider extends Component {
  state = {
    numberOfGuests: 4
  }
  actions = {
    setNumberOfGuests: (e) => this.setState({ numberOfGuests: +e.target.value }),
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        actions: this.actions
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const App = () =>
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Dinner Planner</h1>
      {/* We rended diffrent component based on the path */}
      <DinnerProvider>
        <Route exact path="/" component={Welcome}/>
        <Route path="/search" component={SelectDish}/>
      </DinnerProvider>
    </header>
  </div>

export default App;
