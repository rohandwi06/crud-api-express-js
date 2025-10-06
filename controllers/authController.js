const {User} = require('../db/models')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try{
    const {username, password} = req.body
    if (!username || !password) return res.status(403).json({message: 'Username dan Password dibutuhkan!'})

    const existingUsername = await User.findOne({where: {username}})
    if (existingUsername) {
        return res.status(403).json({message: 'Username sudah ada'})
    }

    await User.create({username, password})
    
    res.status(201).json({
        message: 'Berhasil register, silahkan login.'
    })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.login = async (req, res) => {
    try{
    const {username, password} = req.body
    if (!username || !password) return res.status(403).json({message: 'Username dan Password dibutuhkan!'})

    const user = await User.findOne({where: {username}})
    if (!user) return res.status(401).json({message: 'Data user tidak ada!'})

    const isPasswordValid = await user.validatePassword(password)
    if (!isPasswordValid) return res.status(401).json({message: 'Password salah!'})

    const token = jwt.sign(
        {id: user.id, username: user.username, password: user.password},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    )

    res.cookie('token', token, {httpOnly: true})

    res.status(200).json({
        message: 'Login berhasil!',
        token: token
    })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}