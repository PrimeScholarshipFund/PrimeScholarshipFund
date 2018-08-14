import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import config from '../../config/config';
import DonateButton from './DonateButton';
import swal from 'sweetalert';

const CURRENCY = 'USD';


const successPayment = data => {
    const amount = this.props;
};

const errorPayment = data => {
    console.log('error', data);
    
    swal('Payment Error', `Please try again`, `error`);
};

const onToken = (amount, description) => token =>
axios.post(config.PAYMENT_SERVER_URL,
    {
        description: description,
        source: token.id,
        currency: CURRENCY,
        amount: amount
    })
    .then(successPayment,swal (`Payment of ${(amount/100).toLocaleString('en-US', {style: 'currency', currency: 'USD'})} via Stripe successful`, `Thank you for your donation`, `success`))
    .catch(errorPayment);
    
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
                stripeKey={config.STRIPE_PUBLISHABLE}
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
     // const Checkout = ({ name, description, amount }) =>
   
Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
  };
    
    export default Checkout;