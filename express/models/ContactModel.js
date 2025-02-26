const mongoose = require('mongoose')


const ContactModel = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required: true

    },
    phone: {
        type:Number,
        unique: true,
        required:true
    }
})

const Contacts = mongoose.model("Contacts",ContactModel)
module.exports = Contacts