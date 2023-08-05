// import mongoose
const mongoose = require('mongoose')

// create schema
const jobschema = new mongoose.Schema({
    postname:{
        type:String,
         required:true
    },
    vaccencies:{
        type:Number,
         required:true
    },
    description:{
        type:String,
         required:true
    },
    experience:{
        type:String,
         required:true
    },
    qualification:{
        type:String,
         required:true
    },
    salery:{
        type:String,
         required:true
    },
    lastdate:{
        type:String,
         required:true
    },
     companyid:{
        type:String,
         required:true
    },
})

// create model
const jobs = new mongoose.model("jobs",jobschema)

// export
module.exports = jobs