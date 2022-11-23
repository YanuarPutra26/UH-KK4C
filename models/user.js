const mongoose = require('mongoose')
const user = require('../controllers/user')

const UserSchma = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'silahkan isiskan nama'],
        uniqe: true
    },
    email: {
        type: String,
        required: true,
        uniqe: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'silahkan isiskan email valid']
    }
})

module.exports = mongoose.model('user', UserSchma)