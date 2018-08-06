import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './AboutPage.css';
import PhotoAndy from '../../photos/andy.png';
import PhotoIlana from '../../photos/ilana.png';
import PhotoEllen from '../../photos/ellen.png';

import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import SimpleTabs from '../SimpleTabs/SimpleTabs';


class AboutPage extends Component {

  render() {
    return (
      <div>
        <div>
          <SimpleTabs
            value = {1}
          />
        </div>
        <div className="grid-3">
            <Paper className="top">
            <h1>The Fund</h1>
          <p>The scholarship fund was found in 2018 by Prime Digital Academy alumni to increase the
  participation of underrepresented students from underserved communities in STEM industries in
  the greater Minneapolis / St. Paul area.
  Increasing diversity in STEM presents a number of challenges. Underrepresented students face
  substantial barriers, including limited access to quality science education, fewer resources to
  invest in career advancement, and covering additional living expenses while pursuing full-time
  education. By removing some of the financial burdens associated with going back to school, the
  scholarship fund plays a vital role in increasing access to education for underrepresented
  students.

  The scholarship fund provides support for students seeking to cover tuition expenses at Prime
  Digital Academy and other supplemental expenses, such as selected living costs.
  Would you like to get involved? Please, <a href="mailto:ilana.nagib@gmail.com">contact</a> or donate <Link to="/donate">here</Link>.</p>


      <h2>The Board</h2>

      <div className="vertGrid">
      <Paper className="tile">

          <img src={PhotoIlana} alt="" className="board"/>

          <div className="content">
          <h4>Ilana Nagib - President</h4>
          <p>I am extremely passionate about equality, diversity and inclusion. I moved to the United States
  from Brazil 10 years ago, and ever since, I haven’t stopped working to increase opportunities for
  underrepresented communities. I have a background in Communications and also recently
  graduated from Prime Digital Academy in the Kochab cohort. Technology has changed my life
  in so many ways and I am excited to be part of a group that is working hard to change the “face”
  of the tech industry in the Minneapolis / St. Paul area.</p>
          </div>
        </Paper>

        <Paper className="tile">


          <img src={PhotoEllen} alt="" className="board"/>

          <div className="content">
          <h4>Ellen Keal - IT Officer</h4>
          <p>I graduated from Prime in July 2018 in the Kochab cohort. Before that, I got a degree in Math
  and Physics from the University of Wisconsin, Madison. I strongly believe in the power of
  education, and believe everyone should be able to access education. When I'm not coding, I
  can be found helping younger students with their Math and Reading skills, or running around the
  lakes and trails in Minneapolis.</p>
          </div>
        </Paper>

        <Paper className="tile">

          <img src={PhotoAndy} alt="" className="board"/>

          <div className="content">
          <h4>Andy Krueger - Evaluations Officer</h4>
          <p>I graduated from the University of Wisconsin-Eau Claire in 2003 with a degree in Management
  & Entrepreneurship. I was part of the 2018 Colfax cohort at Prime Digital Academy, and I work
  as a UX Designer at Merrill Corporation. My wife and I have organized craft fairs for the past 13
  years and currently run the Nicollet Makers Market, a popup shopping event featuring creators
  who represent the diversity of Minneapolis and surrounding neighborhoods.</p>
        </div>
        </Paper>
      </div>
        </Paper>
      </div>
      </div>

    );
  }
}

export default AboutPage;
