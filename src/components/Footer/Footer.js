import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import StripeImage from '../../photos/powered_by_stripe.svg'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer">
                <h5>Prime Scholarship Fund</h5>
                <h6>Contact Us:</h6>
                <div id="socialIcon">
                    <SocialIcon network="email" style={{ height: 40, width: 40, margin: "10px 10px"}} />
                    <SocialIcon network="twitter" style={{ height: 40, width: 40, margin: "10px 10px"}} />
                    <SocialIcon network="facebook" style={{ height: 40, width: 40, margin: "10px 10px" }} />
                    <SocialIcon network="linkedin" style={{ height: 40, width: 40, margin: "10px 10px" }} />
                    <SocialIcon network="instagram" style={{ height: 40, width: 40, margin: "10px 10px" }} />
                    <SocialIcon network="snapchat" style={{ height: 40, width: 40, margin: "10px 10px" }} />
                    <SocialIcon network="twitch" style={{ height: 40, width: 40, margin: "10px 10px" }} />
                    <SocialIcon network="youtube" style={{ height: 40, width: 40, margin: "10px 10px" }} />
                </div>
                <div id="stripe">
                <img src={StripeImage} alt="Powered by Stripe"/>
                </div>
            </div>
         );
    }
}
 
export default Footer;