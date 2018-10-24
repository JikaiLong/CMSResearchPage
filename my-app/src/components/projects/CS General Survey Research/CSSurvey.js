import React, { Component } from 'react';
import './CSSurvey.css';

class cssurvey extends Component {
  render() {
    return (
      <div className="CSSurvey">
        <header>
          <div className = "CSSurveyTitle">
            CSSurvey
            </div>
        </header>
        
        <body>
          <div className = "AboutCSSurvey">
            We will create an universal Computer science survey which can be used to gather useful data from computer science students across all universities in the World
          </div>
        </body>

      </div>
    );
  }
}

export default cssurvey;