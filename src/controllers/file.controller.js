const mongoose=require("mongoose");
const express=require("express");
const uploadfile=require("../middlewares/uploads");
const File=require("../models/file.model");
const authenticate=require("../middlewares/authenticate")
const router=express.Router();

router.get("/",authenticate,async(req,res)=>{
    try{
      const item= await File.find().lean().exec();
      return res.status(200).send(item);
    }
    catch(err)
    {
        return res.status(500).send(err); 
    }
})

router.post("/",authenticate, uploadfile.single("profilePic"), async (req, res) => {
  // req.body.user_id = req.user._id;
  try {
    
    const user = await File.create({
      user_id: req.body.user_id,
      profilePic: req.file.path,
      
    });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:user_id",async (req,res)=>{
  try {
      const file=await File.findByIdAndDelete(req.params.user_id).lean().exec() 
      return res.status(200).send(file)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});
module.exports=router;