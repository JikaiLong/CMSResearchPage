import React, { Component } from 'react';
import './App.css';
import Navbar from './components/others/slider/slider.js'
import Codeclash from './components/projects/Code Clash/codeclash.js';
import Codemangler from './components/projects/Code Mangler/codemangler.js';
import CSSurvey from './components/projects/CS General Survey Research/CSSurvey.js';
import Genderstudy from './components/projects/Gender Study Research/genderstudy.js';
import IdentityAtheneum from './components/projects/Identity Atheneum/identityatheneum.js';

class App extends Component {
  render() {
    return (
      <div className="CMS Research Project">
        <header>
          <div className = "Title">
            CMS Research Projects
            </div>
          <div className = 'NavBar'>
            <Navbar />
          </div>
        </header>
        <ul class = "projectHeadings">
          <li id = 'codeclashsection'>
            <Codeclash />
            </li>

          <li id = 'codemanglersection'>
            <Codemangler />
            </li>

          <li id = 'cssurveysection'>
            <CSSurvey />
            </li>

          <li id = 'genderstudysection'>
            <Genderstudy />
            </li>

          <li id = 'identityatheneumsection'>
            <IdentityAtheneum />
            </li>
          </ul>
      </div>
    );
  }
}

export default App;
