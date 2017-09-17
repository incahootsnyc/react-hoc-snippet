import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import MainComponent from './MainComponent';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<MainComponent/>, document.getElementById('entry'));
});