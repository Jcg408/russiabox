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
})

module.exports = router;