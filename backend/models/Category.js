const mongoose = require('mongoose');
const { Schema } = mongoose;

//Category Schema
const CategorySchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    imgPath: {type: String, required: true}
});

module.exports = mongoose.model('Category', CategorySchema);