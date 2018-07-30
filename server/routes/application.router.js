const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all information about every applicant
 */
router.get('/admin', (req, res) => {
    let queryText = `SELECT * from form
        JOIN contact on contact.form_id = form.id
        JOIN demographics on demographics.form_id = form.id
        JOIN expenses on expenses.form_id = form.id
        JOIN income on income.form_id = form.id`;
    pool.query(queryText)
        .then(response => {
            res.send(response.rows);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;