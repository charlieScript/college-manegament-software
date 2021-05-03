const config = require('../database/configDB');
const { createConnection } = require('mysql2/promise');
const bcrypt = require('../utils/bcrypt');

const getLogin = (req, res) => {
  res.render('Admin/login');
};

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res
        .status(401)
        .json({ message: 'please enter the required parameter' });
    }
    const connection = await createConnection(config);
    let query = `SELECT email, password FROM admin WHERE email = ${connection.escape(
      email,
    )}`;
    const [rows, fields] = await connection.query(query);
    /// if an empty row is found return user is not found
    if (rows.length === 0) {
      return res.status(404).json({
        message: 'User not registered',
      });
    }
    // when a correspaonding row is found
    if (rows[0]) {
      // decrpypt the data from db and compare
      bcrypt
        .compare(password, rows[0].password)
        .then((result) => {
          // if passowrd is correct
          if (result === true) {
            return res.status(200).json({
              message: 'User Accepted',
            });
          } else {
            return res.status(200).json({
              message: 'incorrect password',
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      // if user is not found
      return res.status(200).json({
        message: 'User not registered',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getLogin,
  postLogin,
};
