// loads dotebv
const dotenv = require('dotenv')
dotenv.config()

const config = {
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};


module.exports = config