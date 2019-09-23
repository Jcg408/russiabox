const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boxSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true, 
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    year: {
        type: Number
    },
    artist: {
        type: String,
        trim: true,
        minlength: 3
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
    
});

const Box = mongoose.model('Box', boxSchema);

module.exports = Box;