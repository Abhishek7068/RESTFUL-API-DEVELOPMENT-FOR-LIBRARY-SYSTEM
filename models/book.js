const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    publishedDate: { type: Date },
    copies: { type: Number, default: 1 },
});

module.exports = mongoose.model('Book', bookSchema);