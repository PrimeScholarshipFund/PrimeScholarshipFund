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
        // add order by
    pool.query(queryText)
        .then(response => {
            res.send(response.rows);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        })
});

//get route for individual application applicatn side
//edit this later to operate solely from form.id
router.get('/applicant/:id', (req, res) => {
    const id = req.params.id;
    let queryText = `SELECT * FROM person
    JOIN form on form.user_id = person.id
    JOIN demographics on demographics.form_id = form.id
    JOIN expenses on expenses.form_id = form.id
    JOIN income on income.form_id = form.id
    JOIN contact on contact.form_id = form.id WHERE person.id = $1 AND form.archived = false;`;
    // add order by

    pool.query(queryText, [id])
        .then(response => {
            res.send(response.rows);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        })
}); //end applicant get call

/**
 * NEEDS TO BE REFACTORED
 */
// router.post('/', (req, res) => {
//     // parsing the body
//     const status = req.body.status;
//     const user_id = req.body.user_id;
//     const first_name = req.body.first_name;
//     const last_name = req.body.last_name;
//     const middle_initial = req.body.middle_initial;
//     const address_line_1 = req.body.address_line_1;
//     const address_line_2 = req.body.address_line_2;
//     const city = req.body.city;
//     const state = req.body.state;
//     const zip_code = req.body.zip_code;
//     const phone_number = req.body.phone_number;
//     const email = req.body.email;
//     const accepted_at_prime = req.body.accepted_at_prime;
//     const applied_at_prime = req.body.applied_at_prime;
//     const msp_tech_scholar = req.body.msp_tech_scholar;
//     const applied_for_msp = req.body.applied_for_msp;
//     const gender = req.body.gender;
//     const race = req.body.race;
//     const age = req.body.age;
//     const level_of_ed = req.body.level_of_ed;
//     const lgbtq_status = req.body.lgbtq_status;
//     const adjusted_gross_income = req.body.adjusted_gross_income;
//     const filing_status = req.body.filing_status;
//     const dependents = req.body.dependents;
//     const government_assistance = req.body.government_assistance;
//     const government_assistance_notes = req.body.government_assistance_notes;
//     const employed_during_prime = req.body.employed_during_prime;
//     const income_during_prime = req.body.income_during_prime;
//     const need_tuition = req.body.need_tuition;
//     const housing = req.body.housing;
//     const transportation = req.body.transportation;
//     const childcare = req.body.childcare;
//     const healthcare = req.body.healthcare;
//     const other_expenses = req.body.other_expenses;
//     const other_expenses_notes = req.body.other_expenses_notes;
    

//     // insert into form table first
//     let queryText = `INSERT INTO form (status, user_id)
//         VALUES ($1, $2) RETURNING id`
//     pool.query(queryText, [status, user_id])
//         .then(response => {
//             // console.log(response.rows[0]);
//             let form_id = response.rows[0].id;
//             // console.log({form_id});
//             let injection = [form_id, first_name, last_name, middle_initial, address_line_1, address_line_2, city, state, zip_code, phone_number, email, accepted_at_prime, applied_at_prime, msp_tech_scholar, applied_for_msp];

//             // insert into contact table
//             queryText = `INSERT INTO contact (form_id, first_name, last_name, middle_initial, address_line_1, address_line_2, city, state, zip_code, phone_number, email, accepted_at_prime, applied_at_prime, msp_tech_scholar, applied_for_msp)
//                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;
//             pool.query(queryText, injection)
//                 .then(response => {
//                 }).catch(err => {
//                     console.log({err});
//                     res.sendStatus(500);
//                 })

//             // insert into demographics
//             queryText = `INSERT INTO demographics (form_id, gender, race, age, level_of_ed, lgbtq_status)
//                 VALUES ($1, $2, $3, $4, $5, $6)`;
//             injection = [form_id, gender, race, age, level_of_ed, lgbtq_status];
//             pool.query(queryText, injection)
//                 .then(response => {
//                 }).catch(err => {
//                     console.log({err});
//                     res.sendStatus(500);
//                 })
            
//             // insert into income
//             queryText = `INSERT INTO income (form_id, adjusted_gross_income, filing_status, dependents, government_assistance, government_assistance_notes, employed_during_prime, income_during_prime)
//                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
//             injection = [form_id, adjusted_gross_income, filing_status, dependents, government_assistance, government_assistance_notes, employed_during_prime, income_during_prime];            
//             pool.query(queryText, injection)
//                 .then(response => {
//                 }).catch(err => {
//                     console.log({err});
//                     res.sendStatus(500);
//                 })

//             // insert into expenses
//             queryText = `INSERT INTO expenses (form_id, need_tuition, housing, transportation, childcare, healthcare, other_expenses, other_expenses_notes)
//                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
//             injection = [form_id, need_tuition, housing, transportation, childcare, healthcare, other_expenses, other_expenses_notes];
//             pool.query(queryText, injection)
//                 .then(response => {
//                     res.sendStatus(201);
//                 }).catch(err => {
//                     console.log({err});
//                     res.sendStatus(500);
//                 })
//         }).catch(err => {
//             console.log({err});
//             res.sendStatus(500);
//         })
// });

router.post('/new', (req, res) => {
    const person_id = req.body.person_id;
    const status = 'application in progress';

    let queryText = `INSERT INTO form (status, person_id)
        VALUES ($1, $2) RETURNING id`
    pool.query(queryText, [status, person_id])
        .then(response => {
            res.send(response.rows[0]);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        });
});

router.post('/personal', (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const middle_initial = req.body.middle_initial;
    const address_line_1 = req.body.address_line_1;
    const address_line_2 = req.body.address_line_2;
    const city = req.body.city;
    const state = req.body.state;
    const zip_code = req.body.zip_code;
    const phone_number = req.body.phone_number;
    const email = req.body.email;
    const accepted_at_prime = req.body.accepted_at_prime;
    const applied_at_prime = req.body.applied_at_prime;
    const msp_tech_scholar = req.body.msp_tech_scholar;
    const applied_for_msp = req.body.applied_for_msp;
    const form_id = req.body.form_id;
    const gender = req.body.gender;
    const race = req.body.race;
    const age = req.body.age;
    const level_of_ed = req.body.level_of_ed;
    const lgbtq_status = req.body.lgbtq_status;

    let injection = [form_id, first_name, last_name, middle_initial, address_line_1, address_line_2, city, state, zip_code, phone_number, email, accepted_at_prime, applied_at_prime, msp_tech_scholar, applied_for_msp];

    let queryText = `INSERT INTO contact (form_id, first_name, last_name, middle_initial, address_line_1, address_line_2, city, state, zip_code, phone_number, email, accepted_at_prime, applied_at_prime, msp_tech_scholar, applied_for_msp)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;
    pool.query(queryText, injection)
        .then(response => {
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        })

    queryText = `INSERT INTO demographics (form_id, gender, race, age, level_of_ed, lgbtq_status)
                VALUES ($1, $2, $3, $4, $5, $6)`;
    injection = [form_id, gender, race, age, level_of_ed, lgbtq_status];
    pool.query(queryText, injection)
        .then(response => {
            res.sendStatus(201);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        });
});

router.put('/personal', (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const middle_initial = req.body.middle_initial;
    const address_line_1 = req.body.address_line_1;
    const address_line_2 = req.body.address_line_2;
    const city = req.body.city;
    const state = req.body.state;
    const zip_code = req.body.zip_code;
    const phone_number = req.body.phone_number;
    const email = req.body.email;
    const accepted_at_prime = req.body.accepted_at_prime;
    const applied_at_prime = req.body.applied_at_prime;
    const msp_tech_scholar = req.body.msp_tech_scholar;
    const applied_for_msp = req.body.applied_for_msp;
    const form_id = req.body.form_id;
    const gender = req.body.gender;
    const race = req.body.race;
    const age = req.body.age;
    const level_of_ed = req.body.level_of_ed;
    const lgbtq_status = req.body.lgbtq_status;

    let injection = [first_name, last_name, middle_initial, address_line_1, address_line_2, city, state, zip_code, phone_number, email, accepted_at_prime, applied_at_prime, msp_tech_scholar, applied_for_msp, form_id];

    let queryText = `UPDATE contact SET first_name=$1, last_name=$2, middle_initial=$3,
        address_line_1=$4, address_line_2=$5, city=$6, state=$7, zip_code=$8, 
        phone_number=$9, email=$10, accepted_at_prime=$11, applied_at_prime=$12, 
        msp_tech_scholar=$13, applied_for_msp=$14 WHERE form_id=$15`;
    pool.query(queryText, injection)
        .then(response => {
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        })

    queryText = `UPDATE demographics SET gender=$1, race=$2, age=$3, level_of_ed=$4, lgbtq_status=$5
    WHERE form_id=$6`;
    injection = [gender, race, age, level_of_ed, lgbtq_status, form_id];
    pool.query(queryText, injection)
        .then(response => {
            res.sendStatus(200);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        });
});

router.post('/income', (req, res) => {
    const form_id = req.body.form_id;
    const adjusted_gross_income = req.body.adjusted_gross_income;
    const filing_status = req.body.filing_status;
    const dependents = req.body.dependents;
    const government_assistance = req.body.government_assistance;
    const government_assistance_notes = req.body.government_assistance_notes;
    const employed_during_prime = req.body.employed_during_prime;
    const income_during_prime = req.body.income_during_prime;
    const need_tuition = req.body.need_tuition;
    const housing = req.body.housing;
    const transportation = req.body.transportation;
    const childcare = req.body.childcare;
    const healthcare = req.body.healthcare;
    const other_expenses = req.body.other_expenses;
    const other_expenses_notes = req.body.other_expenses_notes;

    let queryText = `INSERT INTO income (form_id, adjusted_gross_income, filing_status, dependents, government_assistance, government_assistance_notes, employed_during_prime, income_during_prime)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    let injection = [form_id, adjusted_gross_income, filing_status, dependents, government_assistance, government_assistance_notes, employed_during_prime, income_during_prime];            
    pool.query(queryText, injection)
        .then(response => {
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        });
    
    queryText = `INSERT INTO expenses (form_id, need_tuition, housing, transportation, childcare, healthcare, other_expenses, other_expenses_notes)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    injection = [form_id, need_tuition, housing, transportation, childcare, healthcare, other_expenses, other_expenses_notes];
    pool.query(queryText, injection)
        .then(response => {
            res.sendStatus(201);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        });
});

router.put('/income', (req, res) => {
    const form_id = req.body.form_id;
    const adjusted_gross_income = req.body.adjusted_gross_income;
    const filing_status = req.body.filing_status;
    const dependents = req.body.dependents;
    const government_assistance = req.body.government_assistance;
    const government_assistance_notes = req.body.government_assistance_notes;
    const employed_during_prime = req.body.employed_during_prime;
    const income_during_prime = req.body.income_during_prime;
    const need_tuition = req.body.need_tuition;
    const housing = req.body.housing;
    const transportation = req.body.transportation;
    const childcare = req.body.childcare;
    const healthcare = req.body.healthcare;
    const other_expenses = req.body.other_expenses;
    const other_expenses_notes = req.body.other_expenses_notes;

    queryText = `UPDATE income SET adjusted_gross_income=$1, filing_status=$2, dependents=$3,
                government_assistance=$4, government_assistance_notes=$5, 
                employed_during_prime=$6, income_during_prime=$7
                WHERE form_id=$8`;
    injection = [adjusted_gross_income, filing_status, dependents, government_assistance, government_assistance_notes, employed_during_prime, income_during_prime, form_id];            
    pool.query(queryText, injection)
        .then(response => {
            res.sendStatus(200);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        });
});

router.put('/income', (req, res) => {

    // parseBody('expenses');
    const form_id = req.body.form_id;
    const need_tuition = req.body.need_tuition;
    const housing = req.body.housing;
    const transportation = req.body.transportation;
    const childcare = req.body.childcare;
    const healthcare = req.body.healthcare;
    const other_expenses = req.body.other_expenses;
    const other_expenses_notes = req.body.other_expenses_notes;

    queryText = `UPDATE expenses SET need_tuition=$1, housing=$2, transportation=$3, 
                childcare=$4, healthcare=$5, other_expenses=$6, other_expenses_notes=$7
                WHERE form_id=$8`;
    injection = [need_tuition, housing, transportation, childcare, healthcare, other_expenses, other_expenses_notes, form_id];
    pool.query(queryText, injection)
        .then(response => {
            res.sendStatus(200);
        }).catch(err => {
            console.log({err});
            res.sendStatus(500);
        });
});

// const parseBody = function(call, table, body) {
//     let queryText = '';
//     let injection = [];
//     if (call === 'post') {
//         queryText = 'INSERT INTO';
//         injection.push('form_id');
//     } else {
//         queryText = 'UPDATE';
//     }
//     switch(table) {
//         case 'contact':
        
//     }
    
// };



module.exports = router;