const express = require('express');
const router = express.Router();
const Workout = require('../../models/workout');

// GET all workouts/last workout
router.get('/workouts', (req, res) => {
    try {
        Workout.find({})
        Workout.aggregate(
            [{
                "$addFields": {
                    "totalDuration": { "$sum": "$exercises.duration" }
                }
            }],
            (err, results) => {
                res.json(results);
            }
        );
    } catch (err) {
        res.json(err);
    };
});

// GET all workouts stats 7 days
router.get('/workouts/range', (req, res) => {
    try {
        Workout.find().then(data => {
            Workout.aggregate(
                [{
                    "$addFields": {
                        "totalDuration": { "$sum": "$exercises.duration" }
                    },
                }],
                (err, results) => {
                    res.json(results);
                }
            ).limit(7);
        });
    } catch (err) {
        res.json(err);
    };
});

// PUT add exercise
router.put('/workouts/:id', (req, res) => {
    try {
        Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout);
            });
    } catch (err) {
        res.json(err);
    }
});

// POST create workout
router.post("/workouts", (req, res) => {
    try {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            });
    } catch (err) {
        res.json(err);
    };
});

module.exports = router;