let express=require('express');
let router=express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("view employee router called");
})

router.post("/assign-task",(req,res)=>{
    res.send("assigned task router called");
})

router.get("/view-task",(req,res)=>{
    res.send("view task router called");
})

router.delete("/deleteemployee",(req,res)=>{
    res.send("deleted employee router called");
})

module.exports=router;
