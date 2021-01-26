import React from 'react';
import { BrowserRouter as Router } from  'react-router-dom';

import './App.css';

import Menu from './components/Menu';
import Content from './components/Content';

const App = () => {
  return (
    <div className="dashboard">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  )
}

export default App
