import React, { Component } from 'react';
// import { connect } from 'react-redux';
import SimpleTabs from '../SimpleTabs/SimpleTabs';
import { Link } from 'react-router-dom';

import TopImage from '../TopImage/TopImage';

// images
import HeadImage from '../../photos/ScholarshipFundPic.jpg';
import AboutIcon from '../../photos/aboutUsIcon1.png';
import PrimeIcon from '../../photos/aboutUsIcon.png';
import DonateIcon from '../../photos/DonateIcon.png';
import { Parallax } from '../../../node_modules/react-scroll-parallax';

class HomePage extends Component {

  render() {
    return (
      <div >
        <SimpleTabs
         value = {0}
        />
   
          <TopImage image={HeadImage}/>
        
        <div className="wrapper">
          <div className="fill">
            <h1>EDUCATION CAN CHANGE LIVES</h1>
            <p>
              We are committed to increasing the participation of underrepresented students in the
              Minneapolis / St. Paul tech industry. Through education and the opportunities it brings, students
              have a chance to make a difference in their lives and communities.
            </p>
          </div>
        <div className="grid-3">
          <div className="item">
            <h3>Our Story</h3>

            <div className="iconContainer">
            <img src={AboutIcon} alt="" className="icon"/>
            </div>
          
            <p>
            The scholarship fund is focused on removing obstacles to education and career advancement.
            </p>
            <Link to="/about"><p>Learn More</p></Link>
          </div>

          {/* fill with content from here below */}
          <div className="item">
            <h3>Our Partner</h3>
            <div className="iconContainer">
            <img src={PrimeIcon} alt="" className="icon"/>
            </div>
            <p>
            Prime Digital Academy is helping us change the tech industry in the greater Minneapolis / St.
  Paul area.
            </p>
            <p><a href="https://primeacademy.io/">Learn More</a></p>
          </div>

          <div className="item">
            <h3>Donate</h3>
            <div className="iconContainer">
              <img src={DonateIcon} alt="" className="icon"/>
            </div>
            <p>
            Underrepresented students need investment and support to change their lives and their
  communities.
            </p>
            <Link to="/donate"><p>Learn More</p></Link>
          </div>

        </div>

        </div>
      </div>
    );
  }
}

export default HomePage;
