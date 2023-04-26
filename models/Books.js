const mongoose = require('mongoose');

const { Schema } = mongoose;

const BooksSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    title:{
        type: String,
        required : true,
    },
    author:{
        type: String,
        required : true,
    }
});

module.exports = mongoose.model('books',BooksSchema);