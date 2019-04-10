const mongoose = require('mongoose');
const { Schema } = mongoose;

//News Schema
const RatingSchema = new Schema({
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    appId: {type: String}
});

module.exports = mongoose.model('Rating', RatingSchema);