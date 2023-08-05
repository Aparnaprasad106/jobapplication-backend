// import model

const applications = require('../model/applicationScheme')

// store application
exports.storeapplications = async(req,res)=>{
    console.log(req.body);
    const {applicantname,email,qualification,companyid,postname,resume} = req.body
    try{
        const newapplication = new applications({
            applicantname,email,qualification,companyid,postname,resume
        })
        await newapplication.save()
        res.status(200).json('Job applied successfully')
    }
    catch(err){
        res.status(401).json(err)
    }
}

// get application
exports.viewapplications = async(req,res)=>{
    const companyid = req.params.id
    console.log(companyid);
    try{
        const response = await applications.find({companyid})
        if(response){
            res.status(200).json(response)
        }
        else{
            res.status(404).json('Nothing to Display')
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}