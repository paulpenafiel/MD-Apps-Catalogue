const mongoose = require('mongoose');
const { Schema } = mongoose;

//Download Schema
const DownloadSchema= new Schema({
    date: {type: Date, default: Date.now},
    idUser: {type: String},
    idAplication: {type: String , required: true},
    nameAplication: {type: String , required: true},
    categoryAplication: {type: String, required: true},
    descAplication:{type: String, required: true},
    rating:{type:String, required: true},
    imgAplication:{type: String, required: true}
});

module.exports = mongoose.model('Download', DownloadSchema);