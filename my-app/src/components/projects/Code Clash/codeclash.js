import React, { Component } from 'react';
import './codeclash.css';
import samplepic1 from './sample1.png';

class codeclash extends Component {
  render() {
    return (
      <div className="CodeClash">
        <header>
          <div className = "CodeclashTitle">
            Code Clash
            </div>
        </header>
        <body>
          <div className = "AboutCodeClash">
          A tool for students to learn better coding style.

          The way it works is that it shows pieces of code to the user and asks them to compare the two. Eventually, 
          we hope to implement authentication with UofT accounts so students can check their code via logging in with their utorid.
          </div>
          <div><a href = "https://github.com/charyung/Code-Clash"> Code Clash Link </a> </div>
          <br/>
          <div className = "ImageSection">
            <div><img src = {samplepic1}/> </div>
          </div>
        </body>
      </div>
    );
  }
}

export default codeclash;
