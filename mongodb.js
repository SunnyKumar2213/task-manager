const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const connectionURL = "mongodb+srv://sunny:sunny@cluster0.ptpym.mongodb.net";
const dbName = "task_manager";

const id = new ObjectID();
const timeStamp = id.getTimestamp();
console.log(id);
console.log(timeStamp);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {

    if (err) {
        return console.log("unable to connect to mongodb");
    }
    console.log("mongodb connected successfully");
    const db = client.db(dbName);
    // const updatePromise=db.collection('users').updateOne({_id:new ObjectID("5fddd657331e703d28a420be")},{
    //     $set:{
    //         name:"SunnyKumarLalwani"
    //     }
    // });
    // const updateMany= db.collection("tasks").updateMany({
    //     complete:false
    // },{
    //     $set:{
    //         complete:true
    //     }
    // }
    // );
    // updateMany.then((result)=>{
    //     console.log(result.modifiedCount);
    // }).catch((err)=>{
    //     return console.log("Error",err);
    // });

    const deleteMany=db.collection('users').deleteOne({
        age:26
    });

    deleteMany.then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });

});
// db.collection("users").findOne({ _id: new ObjectID("5fe1e5b89082450b28a648e8") }, (err, res) => {
    // //     if (err) {
    // //         console.log("unable to fetch");
    // //     }
    // //     console.log(res);
    // // })

    // db.collection("tasks").find({complete:true}).toArray((error,response)=>{
    //     console.log(response);
    // });
// db.collection('users').insertOne({
    //     _id: id,
    //     "name": "Sunny",
    //     "age": 25
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("unable to insert in to db");
    //     }
    //     console.log(result.ops);
    // });
// db.collection("users").insertMany([
    //     {
    //         "id": 2,
    //         "name": "Kumar",
    //         "age": 26
    //     },
    //     {
    //         "id": 3,
    //         "name": "Lalwani",
    //         "age": 26
    //     },
    //     {
    //         "id": 4,
    //         "name": "ABCD",
    //         "age": 27
    //     }
    // ], (err, result) => {
    //     if (err) {
    //         return console("unable to insert multiple");
    //     }
    //     console.log(result.ops);
    // }
    // )

    // db.collection("tasks").insertMany([
    //     {
    //         "taskId": 1,
    //         "taskDescription": "Task One",
    //         "complete": true
    //     },
    //     {
    //         "taskId": 2,
    //         "taskDescription": "Task Two",
    //         "complete": false
    //     },
    //     {
    //         "taskId": 1,
    //         "taskDescription": "Task three",
    //         "complete": true
    //     }

    // ], (err, result) => {
    //     if (err) {
    //         return console.log("unable to insert many task");
    //     }
    //     console.log(result.ops);
    // }
    // );

