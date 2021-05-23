require('dotenv').config();

//import the Sequelize library
const Sequelize = require('sequelize');

//**IMPORTANT**
//======================================
// Create a .env file in the root directory and assign DB_NAME, DB_USER, and DB_PW your database name, username, and password respectively

//instantiate a sequelize connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
