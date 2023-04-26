const mongoose=require('mongoose');

const mongoURI="mongodb+srv://ragulg126:Ragul2002@cluster0.iwbwqtw.mongodb.net/test"

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected Successfully");
    })
}


module.exports = connectToMongo