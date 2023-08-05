
// import mongoose
const mongoose = require('mongoose')

const applicationSchema = mongoose.Schema({
    applicantname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    companyid:{
        type:String,
        required:true
    },
    postname:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    },
})

// create model
const applications = new mongoose.model('applications',applicationSchema)

// export model
module.exports = applications