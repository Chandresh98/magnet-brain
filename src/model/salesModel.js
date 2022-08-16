const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const salesSchema = new mongoose.Schema({
    userId:{
        type: ObjectId,
        ref: "user",
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    quantity:{
        type: Number,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    Date:{
        type:String
    }
}, { timestamps: true })

module.exports = mongoose.model('saleCollection', salesSchema)