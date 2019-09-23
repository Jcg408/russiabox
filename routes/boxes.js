const router = require('express').Router();
let Box = require('../models/box');

router.route('/').get((req, res) => {
    Box.find()
    .then(boxes => res.json(boxes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res)=> {
    const name = req.body.name;
    const description = req.body.description;
    const year = req.body.year;
    const artist = req.body.artist;
    const location= req.body.location;

    newBox = new Box({name, description, year, artist, location});

    newBox.save()
    .then(()=> res.json('Box added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res)=> {
    Box.findById(req.params.id)
    .then (box => res.json(box))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Box.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Box deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res)=> {
    Box.findById(req.params.id)
    .then(box => {
        box.name = req.body.name;
        box.description = req.body.description;
        box.year = Number(req.body.year);
        box.artist = req.body.artist;
        box.location = req.body.location;

        box.save()
        .then(() => res.json('Box Edited!'))
       
    })
     .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;