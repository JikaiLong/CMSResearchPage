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
            This will be about the project. It will be given a more indepth description
          </div>
        </body>

      </div>
    );
  }
}

export default cssurvey;