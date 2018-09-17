const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET all information about every applicant
 */
router.get('/applicants', (req, res) => {
    if(req.user.admin) {
        let queryText = `SELECT * from form
        JOIN contact on contact.form_id = form.id
        JOIN demographics on demographics.form_id = form.id
        JOIN expenses on expenses.form_id = form.id
        JOIN income on income.form_id = form.id
        WHERE status IS NOT NULL
        ORDER BY form.id`;

        pool.query(queryText)
            .then(response => {
                res.send(response.rows);
            }).catch(err => {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(404);
    }

});

router.put('/save', (req, res) => {
    const comments = req.body.comments;
    const status = req.body.status;
    const form_id = req.body.form_id;

    let queryText = `UPDATE form SET comments=$1, status=$2 WHERE id=$3`;
    pool.query(queryText, [comments, status, form_id])
        .then(response => {
            res.sendStatus(200);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        })
});

module.exports = router;
