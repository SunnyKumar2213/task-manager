const express = require('express');
const User=require('../models/user');
const auth=require('../middleware/auth');


const router = new express.Router();

router.get('/getUsers',auth,async(req,res)=>{
    res.status(200).send(req.user);
})

router.post('/user/login',async(req,res)=>{

    try {
        const user = await User.findByCredential(req.body.email, req.body.password);
        const token = await user.generateToken();
        res.send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/getUserById/:id', auth,async(req,res)=>{
    const _id=req.params.id;
   try{
       const user=await User.findById(_id);
       if(!user){
           return res.status(200).send("User not found")
       }
       return res.status(200).send(user);
    }
    catch(e){
        return res.status(400).send(e);
    }

})
router.post('/users',async (req,res)=>{
    const user = new User(req.body);
    try{
    await user.save();
    const token=await user.generateToken();
    return res.status(200).send({user,token});
    }catch(e)
    {
        return res.status(400).send(e);
    }
});

router.post('/user/logout',auth,async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter(token=>{
            return token.token!==req.token;
        });
        await req.user.save();
        return res.status(200).send("User logout successfully");
    }catch(e){
        return res.status(500).send("Some thing went wrong");
    }
});

router.post('/user/logoutAll',auth,async(req,res)=>{
    try{
        req.user.tokens=[];
        await req.user.save();
        return res.status(200).send("All users logout successfully");

    }catch(e){
        res.status(500).send("Something went wrong");
    }
});
router.patch('/users/me',auth,async (req,res)=>{
    const updates=Object.keys(req.body);
    const allowUpdate=['name','age','email','password'];
    const isValidateOperation=updates.every((update)=> allowUpdate.includes(update));

    if(!isValidateOperation){
            return res.status(400).send("Error:Update is not valid please check your parameters");
    }
    try{
        updates.forEach((update)=>{
            req.user[update]=req.body[update];
        });
        await req.user.save();
    return res.status(200).send(req.user);
    }
    catch(e){
        return res.status(400).send(e);
    }

});
router.delete('/users/me',auth,async(req,res)=>{
    try{
        await req.user.remove();
        return res.status(200).send(req.user);
    }catch(err){
        res.status(400).send(err);
    }

})

module.exports=router;