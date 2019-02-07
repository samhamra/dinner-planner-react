import React, {Component} from 'react';
import './Welcome.css';
import '../App/App.css';
import {Link} from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (
      <div className="xs-col-12 container" id="frontPageView">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8" align="center">
            <div className="col" id="text-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed dictum nibh. Nulla dolor tellus, ullamcorper nec ex in, scelerisque rutrum ante. Curabitur mattis diam tellus, id aliquam ipsum commodo non. Nullam tempus massa et velit placerat porttitor. Sed posuere ipsum ut ex luctus sodales.
            </div>
            <div className="col" id="button-container">
              <Link to="/shop">
                <button id="create-dinner-button" className="button center" type="button" name="button">Create New Dinner</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

