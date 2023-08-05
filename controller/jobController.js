// import schema
const jobs = require('../model/jobsScheme')

// Add job vaccencies
exports.addjobVaccencies = async(req,res)=>{
    const {postname,vaccencies,description,experience,qualification,salery,lastdate} = req.body
    const {id} = req.params
    try{
            const newjob = new jobs({
                postname,vaccencies,description,experience,qualification,salery,lastdate,companyid:id
            })
            await newjob.save()
            res.status(200).json("job added successfully")
        }
    catch(error){
        res.status(401).json(error)
    }
}

// get jobs

exports.getjobs = async(req,res)=>{
    const search = req.query.search
    const query = {
        postname:{$regex:search,$options:"i"}
    }
    try{
        const response = await jobs.find(query)
        res.status(200).json(response)
    }
    catch(err){
        res.status(401).json(err)
    }
}

// get job of particular id
exports.jobdetails = async(req,res)=>{
    const {id} = req.params
    try{
        const response = await jobs.findOne({_id:id})
        res.status(200).json(response)
    }
    catch(err){
        res.status(401).json(err)
    }
}