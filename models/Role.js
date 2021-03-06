const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const User = require('./User');

const Role = sequelize.define('userRoles', {
    role: { type: Sequelize.STRING }
});

//User.belongsTo(Role, {foreignKey: 'roleID'});

Role.sync({ alter: true });

module.exports = Role;