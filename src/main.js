import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<TestComponent/>, document.getElementById('entry'));
});