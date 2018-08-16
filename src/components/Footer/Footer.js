import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import StripeImage from '../../photos/powered_by_stripe.svg'
import { IconButton } from '@material-ui/core';

//static footer, you can add your links to your
//social media profiles
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer">
                <h3>Prime Scholarship Fund</h3>
                <h6>Contact Us:</h6>
                <div id="socialIcon">
                        {/* Add your links to your social network accounts here  */}
                  <IconButton href={'mailto:someone@example.com'}><SocialIcon network="email" style={{ height: 40, width: 40}} /></IconButton> 
                  <IconButton href={'https://www.twitter.com/'} target='blank_'><SocialIcon  network="twitter" style={{ height: 40, width: 40}} /></IconButton> 
                  <IconButton href={'https://www.facebook.com/'} target='blank_'><SocialIcon network="facebook" style={{ height: 40, width: 40 }} /></IconButton> 
                  <IconButton href={'https://www.linkedin.com/'} target='blank_'><SocialIcon network="linkedin" style={{ height: 40, width: 40 }} /></IconButton> 
                  <IconButton href={'https://www.instagram.com/'} target='blank_'><SocialIcon network="instagram" style={{ height: 40, width: 40 }} /></IconButton> 
                  <IconButton href={'https://www.snapchat.com/'} target='blank_'><SocialIcon network="snapchat" style={{ height: 40, width: 40 }} /></IconButton> 
                  <IconButton href={'https://www.twitch.tv/'} target='blank_'><SocialIcon network="twitch" style={{ height: 40, width: 40 }} /></IconButton> 
                  <IconButton href={'https://www.youtube.com/'} target='blank_'><SocialIcon network="youtube" style={{ height: 40, width: 40 }} /></IconButton> 
                </div>
                <div id="stripe">
                <img src={StripeImage} alt="Powered by Stripe"/>
                </div>
                <p className="secret" >Created by: Deric Aaron, Robert Andrade, Sasha Milenkovic, Dan Ross </p>
            </div>
         );
    }
}
 
export default Footer;