// import model

const users = require('../model/userSchema')

// REGISTER
exports.userRegistration = async(req,res)=>{
    const file = req.file.filename
    console.log(file);

   const {name,email,password,gender,qualification} = req.body
   if(!name || !email || !password || !gender || !qualification || !file){
    alert("All Inputs are required")
   }
   try{
    const preuser = await users.findOne({email})
    if(preuser){
        res.status(401).json("Already Registerd")
    }
    else{
       const newUser = new users({
        name,email,password,gender,qualification,resume:file
       })
       await newUser.save()
       res.status(200).json(newUser)
    }

   }
   catch(error){
    res.status(401).json(error)
   }
}

// login
exports.userLogin = async(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body 
    try{
        const user = await users.findOne({email})
        if(user){
           if(password==user.password){
            res.status(200).json(user)
           }
           else{
            res.status(401).json("invalid password")
           }
        }
        else{
            res.status(404).json("user doesn't exist!! pls register")
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}
