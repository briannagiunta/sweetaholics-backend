'use strict';
const bcrypt = require('bcrypt')
const hashedPassword = bcrypt.hashSync('test', 10)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',[
      {
        name: 'Ryan',
        email: 'adminryan@email.com',
        password: hashedPassword,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
