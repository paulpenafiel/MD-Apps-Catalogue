const mongoose = require('mongoose');
const { Schema } = mongoose;

//Commentary Schema
const CommentarySchema = new Schema({
    date: {type: Date , default: Date.now},
    body: {type: String, required: true},
    appId: {type: String, required: true},
    userId: {type: String, required: true },
    appName: {type: String, required: true},
    userName: {type: String, required: true},
    imgPath: {type: String, required: true},
    status: {type: String, default: 'permitido'},
    response: [
        {
        date: {type: Date , default: Date.now},
        body: {type: String},
        userId: {type: String},
        userName: {type: String},
        imgPath: {type: String}
    } 
    ]
});

module.exports = mongoose.model('Commentary', CommentarySchema);