const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhizarc04:<db_password>@cluster0.qkrzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')  

const connection = mongoose.connection
connectio.on('connected', () => { console.log('db connected') })
connection.on('error', () => { console.log('db error')})
