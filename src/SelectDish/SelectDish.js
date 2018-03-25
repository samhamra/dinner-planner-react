import React from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';

const SelectDish = () =>
  <div className="SelectDish">
    <h2>This is the Select Dish screen</h2>
    <Sidebar/>
    <Dishes/>
  </div>

export default SelectDish;
