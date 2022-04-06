const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');

const SOS = sequelize.define('sosses', {
    userID: { type: Sequelize.NUMBER },
    rating: { type: Sequelize.NUMBER },
    service: { type: Sequelize.STRING }
});
SOS.sync({ alter: true });
module.exports = SOS;