const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PW,
      {
            host: 'scfsdtest.mysql.database.azure.com',
            dialect: 'mysql',
            dialectOptions: {
                  ssl: {
                        require: true,
                        rejectUnauthorized: false
                  }
            },
            port: 3306
      }
);

module.exports = sequelize;