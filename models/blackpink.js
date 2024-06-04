const mongoose = require('mongoose');
const Schema = mongoose.Schema
const commentSchema = new Schema({
    name : {
        type : String,
        require : true,
        unique : true
    },
    concept: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
}, {timestamps: true});
const blackpinkSchema = new Schema({
    name : {
        type : String,
        require : true,
        unique : true
    },
    age: {
        type : Number,
        require : true
    },
    img: {
        type: String,
        require: true
    },
    nation: {
        type: String,
        require: true   
    },
    comments: [commentSchema]

}, {timestamps: true});

const Blackpink = mongoose.model('blackpinks', blackpinkSchema);
module.exports = Blackpink;

