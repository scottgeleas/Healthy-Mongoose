const express = require('express');
const router = express.Router();
const Exercise = require('../../models/exercise')

router.get('/', async (req, res) => {
    // get all exercises
    try {
        const exercises = await Exercise.find()
        res.json(exercises)
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // get one exercise
});

router.post('/', async (req, res) => {
    // create an exercise
});

router.put/patch('/:id', async (req, res) => {
    // update an exercise
});

router.delete('/:id', async (req, res) => {
    // delete one exercise
});

module.exports = router;