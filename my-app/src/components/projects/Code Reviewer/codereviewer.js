import React, { Component } from 'react';
import './codereviewer.css';


class codereviewer extends Component {
  render() {
    return (
      <div className="CodeReviewer">
        <header>
          <div className = "CodeReviewerTitle">
            Code Reviewer
            </div>
        </header>
        <body>
          <div className = "AboutCodeReviewer">
          Code Reviewer is a online platform for conducting anonymous peer reviews, 
          designed for helping students write better code by learning from their peers.
          </div>
          <div><a href = "https://github.com/BoZhaoUTSC/code-reviewer-2.0"> Code Reviewer Link </a> </div>
        </body>
      </div>
    );
  }
}

export default codereviewer;