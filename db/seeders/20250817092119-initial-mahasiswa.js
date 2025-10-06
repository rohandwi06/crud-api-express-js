'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mahasiswas', [{
    nama: 'John Doe',
    nim: 12345678,
    jurusan: 'Informatika',
    tanggal_lahir: new Date('2006-10-06'),
    alamat: 'Lumajang',
    createdAt: new Date(),
    updatedAt: new Date()
      }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
