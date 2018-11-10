import React, { Component } from 'react';
import TopImage from '../TopImage/TopImage';
import TopPhoto from '../../photos/scholarshipFund4.jpeg';


class Landing extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <TopImage image={TopPhoto}/>
        <div className="top">
        <h1>Application</h1>
        <p className="sub">The scholarship fund is dedicated to providing scholarship funds and supplemental living costs
to underrepresented students interested in learning software engineering and UX Design.</p>
        <h3>Eligibility Requirements</h3>
        <ul className="sub">
            <li>Students of color</li>
            <li>Be interested in attending a bootcamp as a full-stack software engineer or UX
Design student</li>
        </ul>

        <h3>Before you begin filling out your application</h3>
        <ul className="sub">
            <li>Have access to your latest 1040 tax form or information about your annual income</li>
            <li>Information about your typical monthly budget</li>
        </ul>
        
        </div>
      </div>
         );
    }
}
 
export default Landing;