'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable
    ('Movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      genres: {
        type: Sequelize.JSON,
        allowNull: false
      },
      popularity: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      release_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      backdrop_path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      poster_path: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
