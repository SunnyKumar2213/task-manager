require('../src/db/mongoose');
const Task= require('../src/models/task');

// Task.findByIdAndDelete('5fec4d0e648c73512086d275').then((result)=>{
//     console.log(result);
//     return Task.countDocuments();
// }).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })


 const deleteTaskAndCount=async(id,complete)=>{
     const del=await Task.findByIdAndDelete(id);
     const count =await Task.countDocuments({complete});
     return count;

 }
 
 deleteTaskAndCount("5ff328a4f525233fa414c67b",true).then((count)=>{
     console.log(count);
 });
//5ff328a4f525233fa414c67b