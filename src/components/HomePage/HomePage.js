import React, { Component } from 'react';
// import { connect } from 'react-redux';
import SimpleTabs from '../SimpleTabs/SimpleTabs';

import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <div>
        <SimpleTabs />
        <Paper className="grid-3">
        <div className="top">
          <div className="fakePic">
            <h3>Stand in for Photo</h3>
          </div>
        <h1>EDUCATION CAN CHANGE LIVES</h1>
        <p>We are committed to increasing the participation of underrepresented students in the
Minneapolis / St. Paul tech industry. Through education and the opportunities it brings, students
have a chance to make a difference in their lives and communities.</p>
        </div>

        <div className="item">
          <h3>Our Story</h3>
          <div className="circle">Image Place Holder</div>
          <p>
          The scholarship fund is focused on removing obstacles to education and career advancement.
          </p>
          <Link to="/about"><p>Learn More</p></Link>
        </div>

        {/* fill with content from here below */}
        <div className="item">
          <h3>Our partner</h3>
          <div className="circle">Image Place Holder</div>
          <p>
          Prime Digital Academy is helping us change the tech industry in the greater Minneapolis / St.
Paul area.
          </p>
          <p><a href="https://primeacademy.io/">Learn More</a></p>
        </div>

        <div className="item">
          <h3>Invest</h3>
          <div className="circle">Image Place Holder</div>
          <p>
          Underrepresented students need investment and support to change their lives and their
communities.
          </p>
          <Link to="/donate"><p>Learn More</p></Link>
        </div>

        </Paper>
      </div>
    );
  }
}

export default HomePage;
