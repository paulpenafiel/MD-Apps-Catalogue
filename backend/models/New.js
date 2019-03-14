const mongoose = require('mongoose');
const { Schema } = mongoose;

//News Schema
const NewSchema = new Schema({
    postType: { type: String, required: true },
    date: { type: String, required: true},
    Hour: { type: String},
    title: { type: String, required: true },
    body: { type: String, required: true },
    source: { type: String, required: true },
    price: { type: String},
    place: { type: String}
});

module.exports = mongoose.model('New', NewSchema);