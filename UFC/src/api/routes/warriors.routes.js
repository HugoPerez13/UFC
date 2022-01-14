const express = require("express");
const router = express.Router();
const warriorsSchema = require('../models/warriors.models');

router.route('/warriors').get((req, res) => {
    warriorsSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})


router.post('/warriors', (req, res, next) => {
    const warrior = new warriorsSchema({
        name: req.body.name,
        description: req.body.description,
        weight: req.body.weight,
        height: req.body.height,
        record: req.body.record,
        category: req.body.category,
    });
    warrior.save().then((response) => {
        res.status(201).json({
            message: "warrior successfully created!",
            result: response
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

module.exports = router;