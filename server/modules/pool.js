const pg = require('pg'); 

const Pool = pg.Pool;


const pool = new Pool({
  database: 'book-keeper', // 👈 CHANGE THIS!
  host: 'LocalHost',
  port: 5432,
});

pool.on('connect', () => {
  console.log('Postgresql connected!');
});

pool.on('error', (error) => {
  console.log('Error with postgres pool!', error)
});


module.exports = pool;
