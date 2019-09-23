const router = require('express').Router();
let Note = require('../models/note');

router.route('/').get((req, res) => {
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=> {
    const subject = req.body.subject;
    const content = req.body.content;

    newNote = new Note({subject, content});

    newNote.save()
    .then(()=> res.json('Note added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;