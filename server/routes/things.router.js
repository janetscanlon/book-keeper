const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();


// GET /things - - - - - - - Respond with all the things.
router.get('/', (req,res) => {
    console.log('GET /books')

    //sql to send to the db 
    const sqlText = `SELECT * FROM books
                        ORDER BY id;`

    //use pool.query to send to the db 
    pool.query(sqlText)
    .then((dbResult) => {
        let booksRequested = dbResult.rows
        res.send(booksRequested)
    })
    .catch((dbError) => {
        console.log('DB query failed inside GET /books')
        console.log('error is:', dbError)
        res.sendStatus(500)

    })
})
// GET /things/:id - - - - - Respond with one thing.

// POST /things - - - - - -  Create one thing.

// DELETE /things/:id - - -  Delete one thing.

// PUT /things/:id - - - - - Update one thing.


module.exports = router;
