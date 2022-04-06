var Sequelize = require('sequelize');

module.exports = new Sequelize('d1bicksevl6nb5', 'dmcdepcxpjunqk', '8420d4d41b380584a52e6b866ab7d5ef88667711d8a4116953e469f39c4e9495', {
    host: 'ec2-52-73-155-171.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    ssl:true,
    dialectOptions:
        { ssl: {require:true, rejectUnauthorized: false }},

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }

  });
