const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client)=>{
    if(err){
     return console.log('Unable to connect mongodb server');
    }
    console.log('Connecting to mongodb server'); 
    const db = client.db('TodoApp');
    //Delete Many
    db.collection('Todos').deleteMany({text: 'Something todo'}).then((result) => {
        console.log(result);
    });
    //Delet One

        // db.collection('Todos').find().toArray().then((dcos) => 
        // {
        //     console.log('TODOs total : ', dcos.length);
        //     console.log(JSON.stringify(dcos,undefined,2));
        
        // },(err) =>{
        //     console.log('error in fertchijng todos : ', err);
        // });
   
});