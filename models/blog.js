const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
}, {timestamps: true});


// create the model 
const Blog = mongoose.model('Blog',blogSchema);

// export model
module.exports = Blog;