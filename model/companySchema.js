// import mongoose
const mongoose = require('mongoose')
// import validators
const validator = require('validator')

const companyschema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error("invalid email")
            }
        }
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
    },
})

// create model
const companies = new mongoose.model('companies',companyschema)

// export schema
module.exports = companies