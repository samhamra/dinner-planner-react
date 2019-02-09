import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Route path='/' component={App}/> 
    </BrowserRouter>
), document.getElementById('root'));

