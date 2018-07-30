const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const stripe = require("stripe")("sk_test_vSIL1tunUMSX1IwoXH4CnQez")

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const charge = stripe.charges.create({
        amount: 69420,
        currency: 'krw',
        source: 'tok_visa',
        receipt_email: 'sashamilenkovic2@gmail.com',
    })
    .then(result => {
        console.log(result)
        res.send(result)
        
    })
    .catch(err => {
        console.log(err);
        
    })
    
});


module.exports = router; 