const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/csvUpload');

const db=mongoose.connection;

db.on('error', console.error.bind(console, "Error Connection to MongoDB"));

db.once('open', function(){
    console.log('Conected to Database:: MongoDB');
})

module.exports=db;
