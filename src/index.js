const express = require('express');
require('./db/mongoose');
const app=express();
const port=process.env.PORT || 5000;
const bcrypt=require('bcryptjs');
app.use(express.json());

const userRouter=require('./routers/user');
const taskRouter = require('./routers/task');
var schedule = require('node-schedule');
var request = require('request');

// app.use((req,res, next)=>{

//    return res.status(501).send("This site is in maintence thanks");
//     //next();
// });

app.use(userRouter);
app.use(taskRouter);


const Task= require('./models/task');
const User=require('./models/user');

// const main= async()=>{
//     // const task=await Task.findById({_id:'601932006d8b1b0ac081c0cb'});
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user=await User.findById({_id:'601920da3778c008b85aa304'});
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);    

// }

// main();


app.listen(port,()=>{
    console.log("Server is up :" +port)
})


// var j = schedule.scheduleJob('0 1 * * *', function(fireDate){
//     var options = {
//         uri : 'http://mobile.tapmad.com/api/jwplayerUpdateTags',
//         method : 'GET'
//     }; 
//     var res = '';
//     request(options, function (error, response, body) {
//       console.log("Run");
//     });

//   });





// var minutes = 5, the_interval = minutes * 60 * 1000;
// setInterval(function() {

//   console.log("I am doing my 5 minutes check");

//   var options = {
//     uri : 'http://mobile.tapmad.com/api/jwplayerUpdateTags',
//     method : 'GET'
// }; 
// var res = '';
// request(options, function (error, response, body) {
//   console.log("Run");
// });
//   // do your stuff here
// }, the_interval);


// const myFunction = async ()=>{
//     const password="Sunny235";
//     const hashPassword=await bcrypt.hash(password,8);

//     console.log(password);
//     console.log(hashPassword);

//     const IsMatch=await bcrypt.compare("Sunny235",hashPassword);
//     console.log(IsMatch);

// }

// myFunction();



