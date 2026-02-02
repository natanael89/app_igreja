'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('watch_times', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      video_id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: 'videos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      seconds: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('watch_times')
  }
};
