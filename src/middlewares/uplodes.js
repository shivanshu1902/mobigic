const multer= require("multer");

const path = require("path");

const storage=multer.diskStorage({
   
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"../uploadfile"))
        
    },
    filename:(req,file,cb)=>{
        const unique=Date.now();


        cb(null,unique+"-"+file.originalname);
    }
})
const fileFilter=(req,file,cb)=>{
    if(file.mimetype=="image/jpg"|| file.mimetype=="image/png" ||file.mimetype=="image/jpeg")
    {
        cb(null,true)
    }
    else{
        console.log(file.mimetype);
        cb(new Error("incorrect mime type"),false);

    }


}

const upload=multer({
    storage,fileFilter,limits:{fileSize:1024*1024*2}
})
module.exports=upload;