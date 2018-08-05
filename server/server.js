var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

var ToDo = mongoose.model('ToDo',{
    text:{
        type: String,
        required: true,
        minLenth:1,
        trim: true
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

var newToDo = new ToDo({
    text: 'Feed the Cat',
    completed:true,
    completedAt:null
});

newToDo.save().then((doc) => {
    console.log('save todo : ', JSON.stringify(doc, undefined, 2));
},(err) => {
    console.log('Enable to save : ', err);
});