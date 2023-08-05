// import multer
const multer = require('multer')

// define storage
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename = `file-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

// filtering files

const fileFilter = (req,file,callback)=>{
    if(file.mimetype==='application/pdf'){
        callback(null,true)
    }
    else if(file.mimetype==='image/png' || file.mimetype==='image/jpg' || file.mimetype==='image/jpeg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback (new Error("Invalid File Format"))
    }
}

// define upload
const upload = multer({
    storage,
    fileFilter
})

// export upload
module.exports = upload