const express = require('express')
const router = express.Router()
const {getAllMahasiswa, getMahasiswaById, createMahasiswa, searchMahasiswa} = require('../controllers/mahasiswaController')

router.get('/', getAllMahasiswa)
router.post('/create', createMahasiswa)
router.get('/search', searchMahasiswa)
router.get('/:id', getMahasiswaById)

module.exports = router