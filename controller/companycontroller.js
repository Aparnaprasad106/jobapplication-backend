// import model
const companies = require('../model/companySchema')

// Company Register
exports.companyRegister = async(req,res)=>{
    console.log(req);
    const file= req.file.filename
    const {name,email,password,location}=req.body
    if(!name || !email || !password || !location){
        alert("All inpts are required")
    } 
    try{
        const excompany = await companies.findOne({email})
        if(excompany){
            res.status(404).json("Company Already Registerd!! pls login")
        }
        const newcompany = new companies({
            name,email,password,image:file,location
        })
        await newcompany.save()
        res.status(200).json(newcompany)
    } 
    catch(error){
        res.status(401).json(error)
    } 
}

// company Login
exports.companyLogin = async(req,res)=>{
    console.log(req);
    const {email,password} = req.body
    try{
        const company = await companies.findOne({email})
        if(company){
            if(password==company.password){
                res.status(200).json(company)
            }
            else{
                res.status(400).json("invalid password")
            }
        }
        else{
            res.status(404).json("Company Doesn't Exist!! pls register!!")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

// fetch company details
exports.getcompanydetails = async(req,res)=>{
    const {id} = req.params
    console.log(id);
    try{
        const response = await companies.findOne({_id:id})
        console.log(response);
        res.status(200).json(response)
    }
    catch(err){
        res.status(401).json(err)
    }
}