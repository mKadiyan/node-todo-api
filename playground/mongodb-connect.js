const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client)=>{
    if(err){
     return console.log('Unable to connect mongodb server');
    }
    console.log('Connecting to mongodb server'); 
    const db = client.db('TodoApp');
    for(var i=0;i<10000;i++){
        db.collection('Todos').insertOne({
            text: 'Something todo',
            completed: false
        },(err, result) => {
            if(err)
                return console.log('Error while inserting record.', err);
            console.log(JSON.stringify(result.ops, undefined, 2));
        });
   }
    client.close();
});