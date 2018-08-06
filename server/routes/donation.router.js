const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const stripe = require("stripe")("sk_test_vSIL1tunUMSX1IwoXH4CnQez");

const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
        console.log(stripeErr);
        
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  }
/**
 * GET route template
 */
router.get('/', (req, res) => {
    res.send({ 
        message: 'Hello Stripe checkout server!', 
        timestamp: new Date().toISOString() 
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    
    stripe.charges.create(req.body, postStripeCharge(res))
});


module.exports = router; 