require('dotenv').config()
const express = require('express')
const {sequelize} = require('./models')
const cors = require('cors')

const mahasiswaRoute = require('./routes/mahasiswaRoute')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Selamat datang di crud API mahasiswa.')
})

app.use('/api/mahasiswa', mahasiswaRoute)

app.listen(port, async() => {
    await sequelize.authenticate()
    console.log('DB Connected')
    console.log(`Server running di http://localhost:${port}`)
})