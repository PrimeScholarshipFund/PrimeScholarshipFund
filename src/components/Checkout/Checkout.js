import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import config from '../../config/config';

const CURRENCY = 'EUR';

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
        amount: 1000
    })
    .then(successPayment)
    .catch(errorPayment);
    
    const Checkout = ({ name, description, amount }) =>
    <StripeCheckout
    name='James dickenson'
    description={'donating money'}
    amount={1000}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={config.STRIPE_PUBLISHABLE}
    />
    
    export default Checkout;