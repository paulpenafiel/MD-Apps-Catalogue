const mongoose = require('mongoose'); //required to define data Schemas
const { Schema } = mongoose;

//Aplication Schema
const AplicationSchema= new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    description: { type: String, required: true },
    appType: { type: String, required: true },
    rating: { type: Number, default: 0 },
    imgPath: { type: String, required: true },
    status: {type: String, default: 'activo'},
    galery: [{
        galpath: String
    }],
    opSystem: String,
    register: String,
    organization: String,
    developer: String,
    prerequisites: String,
    accessPath: String,
    lastUpdate: String,
    currentVersion: String,
    internetConnection: String,
    keywords: String
});

module.exports = mongoose.model('Aplication', AplicationSchema);
