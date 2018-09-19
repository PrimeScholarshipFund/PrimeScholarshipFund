const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//get route for individual application applicant side
router.get('/applicant/:id', (req, res) => {
    const id = req.params.id;
    let queryText = `SELECT * FROM form
    JOIN demographics on demographics.form_id = form.id
    JOIN expenses on expenses.form_id = form.id
    JOIN income on income.form_id = form.id
    JOIN contact on contact.form_id = form.id WHERE form.id = $1 AND form.archived = false;`;
    pool.query(queryText, [id])
        .then(response => {
            res.send(response.rows);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        })
}); //end applicant get call

// Create a new form 
router.post('/new', (req, res) => {
    // declare variables
    const person_id = req.user.id;
    let formId;

    (async () => {
        // connect to pool
        const client = await pool.connect();
        console.log('connected');

        // SQL transaction
        try{
            await client.query('BEGIN');

            // get all non-archived form data for the person id
            // this checks whether a current application exists
            let { rows } = await client.query(`SELECT * FROM form WHERE person_id=$1 and archived=false`, [person_id])

            // if the form data exists...
            if(rows[0]){
                // ...prepare the object to return
                formId = {id: rows[0].id}
                // ...otherwise create a new form
            } else {
                let { rows } = await client.query(`INSERT INTO form (person_id) VALUES ($1) RETURNING id`, [person_id]);
                formId = {id: rows[0].id};
                
                // use the new form's id to create blank entries in other tables
                await client.query(`INSERT INTO contact (form_id) VALUES($1)`, [formId.id]);
                await client.query(`INSERT INTO demographics (form_id) VALUES($1)`, [formId.id]);
                await client.query(`INSERT INTO income (form_id) VALUES($1)`, [formId.id]);
                await client.query(`INSERT INTO expenses (form_id) VALUES($1)`, [formId.id]);
            }
            // finish SQL transaction and send formID object
            await client.query('COMMIT');
            res.send(formId);
        } catch (err) {
            await pool.query('ROLLBACK');
            console.log({err});
            res.sendStatus(500);
        } finally {
            client.release();
        }
    })().catch(e => console.error(e.stack));
});

// The final save, called at the end of the application process.
router.put('/all', (req, res) => {
    (async () => {
        // connect to the pool
        const client = await pool.connect();

        // run the stageQueries function using the request's body
        // store returned object in a constant
        const queriesAndInjections = await stageQueries('all', req.body.data);

        // SQL transaction
        try{
            await client.query('BEGIN');
            await client.query(queriesAndInjections.firstQuery, queriesAndInjections.firstInjection);
            await client.query(queriesAndInjections.secondQuery, queriesAndInjections.secondInjection);
            await client.query(queriesAndInjections.thirdQuery, queriesAndInjections.thirdInjection);
            await client.query(queriesAndInjections.fourthQuery, queriesAndInjections.fourthInjection);
            await client.query(queriesAndInjections.fifthQuery, queriesAndInjections.fifthInjection);
            await client.query('COMMIT');

            res.sendStatus(200);

        // on error
        } catch (err) {
            await pool.query('ROLLBACK');
            console.log({err});
            res.sendStatus(500);
        } finally {
            client.release();
        }
    })().catch(e => console.error(e.stack));
});

// handles saves from the personal and expenses pages
router.put('/:page', (req, res) => {
    const page = req.params.page;
    (async () => {
        const client = await pool.connect();

        // prepare the SQL queries
        const queriesAndInjections = await stageQueries(page, req.body.data);
        try{
            await client.query('BEGIN');
            await client.query(queriesAndInjections.firstQuery, queriesAndInjections.firstInjection);
            await client.query(queriesAndInjections.secondQuery, queriesAndInjections.secondInjection);
            await client.query('COMMIT');
            res.sendStatus(200);
        } catch (err) {
            await pool.query('ROLLBACK');
            console.log({err});
            res.sendStatus(500);
        } finally {
            client.release();
        }
    })().catch(e => console.error(e.stack));
});

// Function that takes in the route name and req.body, parses the body, then returns an object of the SQL queries and injections
const stageQueries = function(route, body) {
    // initialize queries and injections
    let firstQuery = '';
    let secondQuery = '';
    let thirdQuery = '';
    let fourthQuery = '';
    let fifthQuery = '';

    let firstInjection = [];
    let secondInjection = [];
    let thirdInjection = [];
    let fourthInjection = [];
    let fifthInjection = [];
    let returnObject = {};
    const form_id = body.form_id;

    switch(route) {
        // if the route is all or personal
        case 'all':
        case 'personal':

            const first_name = body.first_name;
            const last_name = body.last_name;
            const middle_initial = body.middle_initial;
            const address_line_1 = body.address_line_1;
            const address_line_2 = body.address_line_2;
            const city = body.city;
            const state = body.state;
            const zip_code = body.zip_code;
            const phone_number = body.phone_number;
            const email = body.email;
            const accepted_at_prime = body.accepted_at_prime;
            const applied_at_prime = body.applied_at_prime;
            const msp_tech_scholar = body.msp_tech_scholar;
            const applied_for_msp = body.applied_for_msp;
            const gender = body.gender;
            const specify_gender = body.specify_gender;
            const race = body.race;
            const age = body.age;
            const level_of_ed = body.level_of_ed;
            const lgbtq_status = body.lgbtq_status;


            firstQuery = `UPDATE contact SET first_name=$1, last_name=$2, middle_initial=$3, address_line_1=$4, address_line_2=$5, city=$6, state=$7, zip_code=$8, phone_number=$9, email=$10, accepted_at_prime=$11, applied_at_prime=$12, msp_tech_scholar=$13, applied_for_msp=$14 WHERE form_id=$15`;
            console.log({firstQuery});
            secondQuery = `UPDATE demographics SET gender=$1, specify_gender=$2, race=$3, age=$4, level_of_ed=$5, lgbtq_status=$6 WHERE form_id=$7`;
            console.log({secondQuery});
            firstInjection.push(first_name, last_name, middle_initial, address_line_1, address_line_2, city, state, zip_code, phone_number, email, accepted_at_prime, applied_at_prime, msp_tech_scholar, applied_for_msp, form_id);
            console.log({firstInjection});
            secondInjection.push(gender, specify_gender, race, age, level_of_ed, lgbtq_status, form_id)
            console.log({secondInjection});

            // break if personal, if all then keep going into the income section to grab all the info from the body
            if(route === 'personal'){
                break;
            }
        case 'income':

            const adjusted_gross_income = body.adjusted_gross_income;
            const filing_status = body.filing_status;
            const dependents = body.dependents;
            const government_assistance = body.government_assistance;
            const government_assistance_notes = body.government_assistance_notes;
            const employed_during_prime = body.employed_during_prime;
            const income_during_prime = body.income_during_prime;
            const need_tuition = body.need_tuition;
            const housing = body.housing;
            const transportation = body.transportation;
            const childcare = body.childcare;
            const healthcare = body.healthcare;
            // const other_expenses = body.other_expenses;
            const other_expenses_notes = body.other_expenses_notes;

            thirdQuery = `UPDATE income SET adjusted_gross_income=$1, filing_status=$2, dependents=$3, government_assistance=$4, government_assistance_notes=$5, employed_during_prime=$6, income_during_prime=$7 WHERE form_id=$8`;
            fourthQuery = `UPDATE expenses SET need_tuition=$1, housing=$2, transportation=$3, childcare=$4, healthcare=$5, other_expenses_notes=$6 WHERE form_id=$7`;
            thirdInjection.push(adjusted_gross_income, filing_status, dependents, government_assistance, government_assistance_notes, employed_during_prime, income_during_prime, form_id);
            fourthInjection.push(need_tuition, housing, transportation, childcare, healthcare, other_expenses_notes, form_id);

            if(route === 'all') {
                fifthQuery = `UPDATE form SET status='Applied' WHERE id=$1`;
                fifthInjection = [form_id]
            } else {
                firstQuery = thirdQuery;
                secondQuery = fourthQuery;
                firstInjection = thirdInjection;
                secondInjection = fourthInjection;
            }
    } // end route switch

    // create returnObject
    returnObject = {
        firstQuery: firstQuery,
        secondQuery: secondQuery,
        firstInjection: firstInjection,
        secondInjection: secondInjection
    };

    if(route === 'all') {
        returnObject = {
            ...returnObject,
            thirdQuery: thirdQuery,
            fourthQuery: fourthQuery,
            fifthQuery: fifthQuery,
            thirdInjection: thirdInjection,
            fourthInjection: fourthInjection,
            fifthInjection: fifthInjection
        }
    }

    return returnObject;
};



module.exports = router;
