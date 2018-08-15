import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import DonateButton from './DonateButton';
import swal from 'sweetalert';

const CURRENCY = 'USD';


const PAYMENT_SERVER_URL = 
process.env.NODE_ENV === "production" ? process.env.PAYMENT_SERVER_URL
: process.env.PAYMENT_SERVER_URL_TEST;

const STRIPE_PUBLIC_KEY = 
process.env.NODE_ENV === "production" ? process.env.STRIPE_PUBLIC_KEY_PRODUCTION
: process.env.STRIPE_PUBLIC_KEY_TEST;
 

const onToken = (amount, description) => token =>
{axios.post(PAYMENT_SERVER_URL,
    {
        description: description,
        source: token.id,
        currency: CURRENCY,
        amount: amount
    })
    .then(response => { console.log(response.data);swal (`Payment of ${(amount/100).toLocaleString('en-US', {style: 'currency', currency: 'USD'})} via Stripe successful`, `Thank you for your donation`, `success`)})
    .catch(error => {console.log(error); swal('Payment Error', `Please try again`, `error`)})
}
    
    class Checkout extends Component {
        
  
        parseAmount = amount => parseInt(amount, 10)*100
        
        render() { 
            
            return ( 
                
            <StripeCheckout
                name={this.props.name}
                description={this.props.description}
                amount={this.parseAmount(this.props.amount)}
                token={onToken(this.parseAmount(this.props.amount), this.props.description)}
                currency={CURRENCY}
                stripeKey={STRIPE_PUBLIC_KEY}
                email={''}
                billingAddress={true}
                >
                    <DonateButton
                        buttonLabel = {this.props.amount === '' ? `Donate Via Stripe` : `Donate $${this.props.amount} Via Stripe`}
                    />
                </StripeCheckout>
        
         );
    }
}
   
Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
  };
    
    export default Checkout;