const Pool = require('pg').Pool
const pool = new Pool({
  database: 'postgres',
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
})

pool.query(`CREATE TABLE content (ID SERIAL PRIMARY KEY, data text);`, (err, res) => {
  console.log(err, res);
  pool.end();
});

const getUsers = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers: getUsers,
};
