const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'prime_feedback',
    max: 10,
    idleTimeoutMillis: 10000,
});


//POST the user inputs
router.post('/', (req, res) => {

    pool.query(`
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
        VALUES ($1, $2, $3, $4);
    `, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        console.log(result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR in POST', error);
        res.sendStatus(500);
    })
})

module.exports = router;