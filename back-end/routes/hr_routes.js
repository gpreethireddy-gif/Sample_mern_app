let express=require('express');
let router=express.Router();
let {users} = require('../models/users');

router.get("/viewemployees",(req,res)=>{
    res.send("view employee router called");
})

router.post("/assign-task",(req,res)=>{
    res.send("assigned task router called");
})

router.get("/view-task",(req,res)=>{
    res.send("view task router called");
})

router.delete("/deleteemployee/:id",async(req,res)=>{
    let deleterec = await users.findByIdAndDelete(req.params.id);
    if(deleterec){
        res.send("record deleted successfully");
    }
})

module.exports=router;
