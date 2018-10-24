import React, { Component } from 'react';
import './identityatheneum.css';
import samplepic1 from './sample1.png';
import samplepic2 from './sample2.png';

class identityatheneum extends Component {
  render() {
    return (
      <div className="IdentityAtheneum">
        <header>
          <div className = "IdentityAtheneumTitle">
            Identity Atheneum
            </div>
        </header>
        <body>
          <div className = "AboutIdentityAtheneum">
          Goal of this project is to offer an easy to use data storage and authorization service for developers. It solves a few problems:

          Apps does not talk to each other, for example, if MarkUs knows abc123 is a TA for A48, IFCAT might not know it, therefore system admin has to setup each program separately.
          Universities usually require you to submit a service provider registration request for each service you use with their IdP, which can be tedious.

          The program is built to scale nicely, so it can support thousands of concurrent sessions.

          Started this semester, it is still in very early stage, I hope to have a test version deployed with uoft weblogin in the coming weeks.
          </div>
          <div><a href = "https://github.com/junthehacker/Identity-Atheneum"> IdentityAtheneum </a> </div>
          <div className = "ImageSection">
            <div><img src = {samplepic1}/> </div>
            <div><img src = {samplepic2}/> </div>
          </div>
        </body>
      </div>
    );
  }
}

export default identityatheneum;