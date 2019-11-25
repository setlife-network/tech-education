const sequelize = require('../models');

const { models } = sequelize;
const { User } = models;

User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });