'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mahasiswas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      nim: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      jurusan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      alamat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mahasiswas');
  }
};