const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    title:{
        type: String,
        enum:['Mr','Mrs','Miss'],
        required: true
    },
    name: {
        type: String,
        required: true,
        trim:true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)