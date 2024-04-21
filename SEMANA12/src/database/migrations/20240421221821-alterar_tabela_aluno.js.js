'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos', 'email', {
      type: Sequelize.STRING,
      allowNull: false
    });
      await queryInterface.addColumn('alunos', 'senha', {
        type: Sequelize.STRING,
        allowNull: false
      });
    }
  }