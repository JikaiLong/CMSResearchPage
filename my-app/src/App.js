import React, { Component } from 'react';
import './App.css';
import Codeclash from './components/projects/Code Clash/codeclash.js';

class App extends Component {
  render() {
    return (
      <div className="CMS Research Project">
        <header>
          <div className = "Title">
            CMS Research Projects
            </div>
        </header>
        <li id = 'codeclashsection'>
          <Codeclash />
          </li>
      </div>
    );
  }
}

export default App;
