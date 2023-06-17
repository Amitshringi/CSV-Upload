const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://amitshringi0786:h7FPQeS7HZO1D5wQ@amit-shringi.kijdxfg.mongodb.net/?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('error', console.error.bind(console, "Error Connection to MongoDB"));

db.once('open', function(){
    console.log('Conected to Database:: MongoDB');
})

module.exports=db;
