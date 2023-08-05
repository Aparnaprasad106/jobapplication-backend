// import mongoose
const mongoose = require('mongoose')
const validator =  require('validator')

const userSchema = mongoose.Schema({
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
                throw Error('Invalid Email')
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    }

})

// create model
const users = new mongoose.model('users',userSchema)

// export model
module.exports = users