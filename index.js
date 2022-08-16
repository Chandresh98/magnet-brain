const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express()
const router = require('./route')





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



mongoose.connect('mongodb+srv://pankaj:XHR0F0IrqL14JxKZ@cluster0.ajtoy.mongodb.net/magnetBrain-Database-DB',{useNewUrlParser:true})
.then( () =>console.log("Mongoose is contected..."))
.catch( err => console.log(err))

app.use('/', router)


app.listen(process.env.PORT || 5000, function() {
    console.log("Express App Running on port " +  (process.env.PORT || 5000));
});