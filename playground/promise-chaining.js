require('../src/db/mongoose');
const User = require('../src/models/user');


User.findByIdAndUpdate("5fec460bcd93b010509b2626",{age:0}).then((result)=>{
    console.log(result);
    return User.countDocuments({age:26})
}).then((result)=>{
    console.log(result);
}).catch((err) => {
    console.log(err);
});

const updateAgeAndCount=async (id,age)=>{
    const update= await User.findByIdAndUpdate(id,{age});
    const count= await User.countDocuments({age});
    return count;
}

updateAgeAndCount("5fec460bcd93b010509b2626",26);