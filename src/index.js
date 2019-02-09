import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import {Route, Switch, Redirect} from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
import Sidebar from './components/Sidebar/Sidebar';
import SearchDish from './components/SearchDish/SearchDish';

ReactDOM.render((
    <BrowserRouter>
        <Route path='/' component={App}/> 
    </BrowserRouter>
), document.getElementById('root'));

