const mongoose = require('mongoose')

var blogSchema = mongoose.Schema({
    title: { type : String, required: true, /**unique: true**/},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    author: String,
    description: String,
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
    topic: String
});

var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
