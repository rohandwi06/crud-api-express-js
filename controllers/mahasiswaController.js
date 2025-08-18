const {Mahasiswa} = require('../models')
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
    const idMahasiswa = req.params.id
    if (!idMahasiswa) return res.status(500).json({message: 'Id mahasiswa harus valid!'})
    
    try {
        const dataMahasiwa = await Mahasiswa.findByPk(idMahasiswa)
        res.status(200).json({
            message: `Berhasil mendapat data mahasiswa ${idMahasiswa}`,
            data: dataMahasiwa
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//Search mahasiswa berdasarkan nama dan atau nim
exports.searchMahasiswa = async (req, res) => {
    const { nama, nim } = req.query;
    const whereClause = {};

    if (nim) {
        whereClause.nim = nim;
    }
    if (nama) {
        whereClause.nama = { [Op.like]: `%${nama}%` };
    }
    
    try {
        const hasilPencarian = await Mahasiswa.findAll({ where: whereClause });

        // --- TAMBAHKAN INI BUAT DEBUGGING ---
        console.log('Hasil dari findAll:', hasilPencarian); 
        // ------------------------------------

        if (!hasilPencarian) {
            // Ini cuma buat jaga-jaga kalau hasilPencarian beneran null
            return res.status(200).json({
                message: 'Hasil pencarian null, aneh nih.',
                data: null
            });
        }
        
        const message = hasilPencarian.length > 0
            ? 'Data mahasiswa berhasil ditemukan!'
            : 'Mahasiswa tidak ditemukan.';

        res.status(200).json({
            message: message,
            data: hasilPencarian
        });

    } catch (err) {
        console.error('Error saat search mahasiswa:', err); 
        res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
    }
};

//Tambah data mahasiswa baru 
exports.createMahasiswa = async (req, res) => {
    const {nama, nim, jurusan, tanggal_lahir, alamat} = req.body
    if (!nama || !nim || !jurusan || !tanggal_lahir || !alamat) return res.status(400).json({message: 'Ada data yang tidak valid!'})

    try {
        const tambahData = await Mahasiswa.create({
            nama: nama,
            nim: nim,
            jurusan: jurusan,
            tanggal_lahir: tanggal_lahir,
            alamat: alamat
        })
        res.status(201).json({
            message: 'Data mahasiswa berhasil ditambahkan',
            data: tambahData
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}