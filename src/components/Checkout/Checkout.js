import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StripeCheckout from 'react-stripe-checkout';
import config from '../../config/config';
import DonateButton from './DonateButton';

const CURRENCY = 'USD';

const styles = {
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  };

const successPayment = data => {
    alert('Payment Successful');
};

const errorPayment = data => {
    console.log('error', data);
    
    alert('Payment Error', data);
};

const onToken = (amount, description) => token =>
axios.post(config.PAYMENT_SERVER_URL,
    {
        description: description,
        source: token.id,
        currency: CURRENCY,
        amount: amount
    })
    .then(successPayment)
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
    
    export default withStyles(styles)(Checkout);