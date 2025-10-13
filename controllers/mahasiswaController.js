const {Mahasiswa} = require('../db/models')
const {Op} = require('sequelize')

//Mendapatkan semua data mahasiswa
exports.getAllMahasiswa = async (req, res) => {
    try{

        const dataMahasiswa = await Mahasiswa.findAll()
        res.status(200).json({
            message: 'Berhasil mendapatkan data mahasiswa.',
            data: dataMahasiswa

        })

    } catch(error) {

        res.status(500).json({message: error.message})

    }
}

//Mendapatkan data mahasiswa berdasarkan id
exports.getMahasiswaById = async (req, res) => {
    try {
        const { id } = req.params

        const dataMahasiswa = await Mahasiswa.findByPk(id)
        if (!dataMahasiswa) {
            return res.status(404).json({ message: "Mahasiswa tidak ditemukan." })
        }

        res.status(200).json({
            message: "Data mahasiswa berhasil ditemukan!",
            data: dataMahasiswa,
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Search mahasiswa berdasarkan nama dan atau nim
exports.searchMahasiswa = async (req, res) => {
    try {

    const { nama, nim } = req.query
    const whereClause = {}

    if (nim) {
        whereClause.nim = nim
    }
    if (nama) {
        whereClause.nama = { [Op.like]: `%${nama}%` }
    }
    
    const hasilPencarian = await Mahasiswa.findAll({ where: whereClause })

    if (!hasilPencarian) {
        return res.status(200).json({
        message: 'Hasil pencarian null',
        data: null
        });
    }
        
    const message = hasilPencarian.length > 0
        ? 'Data mahasiswa berhasil ditemukan!'
        : 'Mahasiswa tidak ditemukan.'

        res.status(200).json({
            message: message,
            data: hasilPencarian
    })

    } catch (err) {
        console.error('Error saat search mahasiswa:', err);
        res.status(500).json({ message: 'Terjadi kesalahan pada server.' })
    }
}

//Tambah data mahasiswa
exports.createMahasiswa = async (req, res) => {
    try {

    const { nama, nim, jurusan, tanggal_lahir, alamat } = req.body
    if (!nama || !nim || !jurusan || !tanggal_lahir || !alamat) {
        return res.status(400).json({ message: 'Ada data yang kurang' })
    }

    // Cek duplikat NIM
    const existingMahasiswa = await Mahasiswa.findOne({where: {nim}})
    if (existingMahasiswa) {
        return res.status(409).json({ message: 'NIM sudah terdaftar' })
    }

    const dataMahasiswa = await Mahasiswa.create({
        nama,
        nim,
        jurusan,
        tanggal_lahir,
        alamat,
        createdAt: new Date(),
        updatedAt: new Date()
    })

    res.status(201).json({
        message: 'Data berhasil ditambahkan',
        data: dataMahasiswa
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Update data mahasiswa berdasarkan ID
exports.updateMahasiswa = async (req, res) => {
    try {

        const {id} = req.params
        const dataMahasiswa = await Mahasiswa.findByPk(id)
        if (!dataMahasiswa) return res.status(500).json({message: 'ID tidak valid'})
        
        await dataMahasiswa.update(req.body)

        res.status(200).json({
            message: 'Data berhasil diupdate',
            data: dataMahasiswa
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

//Delete data mahasiswa berdasarkan ID
exports.deleteMahasiswa = async (req, res) => {
    try {const {id} = req.params
    const dataMahasiswa = await Mahasiswa.findByPk(id)
    if (!dataMahasiswa) return res.status(500).json({message: 'ID tidak valid'})

    await dataMahasiswa.destroy()
    res.status(200).json({message: 'Data berhasil dihapus'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}