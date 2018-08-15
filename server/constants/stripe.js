const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
        //Put live secret key here when you find it. 
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_vSIL1tunUMSX1IwoXH4CnQez';

module.exports = STRIPE_SECRET_KEY;