require('dotenv').config()
const express = require('express')
const {sequelize} = require('./db/models')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const authRoute = require('./routes/authRoute')
const mahasiswaRoute = require('./routes/mahasiswaRoute')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Selamat datang di crud API mahasiswa.')
})

app.use('/api/auth', authRoute)
app.use('/api/mahasiswa', mahasiswaRoute)

app.listen(port, async() => {
    await sequelize.authenticate()
    console.log('DB Connected')
    console.log(`Server running di http://localhost:${port}`)
})