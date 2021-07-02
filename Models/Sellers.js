const mongoose = require('mongoose');
const Seller = mongoose.model('Seller', {
    name: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lagitude:{
        type: String
    },
    latitude:{
        type: String
    },
    role:{
        type:String,
        enum:['User','Admin'],
        defult:'User'
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

})
module.exports = Seller;