import React, {Fragment} from 'react';
import './Sidebar.css';
import {Context} from "../App";

const Sidebar = () =>
  <div className="Sidebar">
    <Context.Consumer>
      {({ state, actions }) => (
        <Fragment>
          <h3>This is the sidebar</h3>
          <p>
            People: <input value={state.numberOfGuests} onChange={actions.setNumberOfGuests}/>
            <br/>
            Total number of guests: {state.numberOfGuests}
          </p>
        </Fragment>
      )}
    </Context.Consumer>
  </div>

export default Sidebar;
