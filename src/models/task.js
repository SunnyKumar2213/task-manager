const mongoose = require('mongoose');
const validator= require('validator');

const Task = mongoose.model("tasks",{
    description:{
        type:String,
        require:true,
        trim:true
        
    },
    complete:{
        type:Boolean,
        default:false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:'users'
    }
});



module.exports=Task