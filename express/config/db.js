const mongoose = require('mongoose')

<<<<<<< HEAD
mongoose.connect('mongodb+srv://abhizarc04:<db_password>@cluster0.qkrzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')  
=======
mongoose.connect('mongodb+srv://adarsh:<db_password>@cluster0.nmqm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')  
>>>>>>> 39e15bb884cc59140cacfc6b0580f32cb30735a5

const connection = mongoose.connection
connectio.on('connected', () => { console.log('db connected') })
connection.on('error', () => { console.log('db error')})


