const mongoose = require('mongoose');
// date base url from mongodb website or localhost like 
//mongodb+srv://abc:abc@cluster0.ptpym.mongodb.net/databaseName
mongoose.connect("mongodb+srv://sunny:sunny@cluster0.ptpym.mongodb.net/task_manager",{
    useNewUrlParser:true,
    useCreateIndex:true

});