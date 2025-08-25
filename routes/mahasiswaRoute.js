const express = require('express')
const router = express.Router()
const {getAllMahasiswa, getMahasiswaById, createMahasiswa, searchMahasiswa, updateMahasiswa, deleteMahasiswa} = require('../controllers/mahasiswaController')
const verifyToken = require('../middleware/authMiddleware')

router.use(verifyToken)

router.get('/', getAllMahasiswa)
router.post('/create', createMahasiswa)
router.get('/search', searchMahasiswa)

router.route('/:id')
    .get(getMahasiswaById)
    .put(updateMahasiswa)
    .delete(deleteMahasiswa)

// router.get('/:id', getMahasiswaById)

module.exports = router