const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
   subject: {
       type: String,
       required: true,
       trim: true,
       minlength: 8
   },
   content: {
       type: String,
       required: true,
       trim: true, 
       minlength: 10
   }
    
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;