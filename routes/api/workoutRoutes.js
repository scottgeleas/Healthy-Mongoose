const express = require('express');
const router = express.Router();
const Workout = require('../../models/workout');

// GET last workout all workouts
router.get('/workouts', (req, res) => {
    try {
        Workout.find({})

        Workout.aggregate(
            [{
                "$addFields": {
                    "totalDuration": { "$sum": "$exercises.duration" }
                }
            }],
            function(err, results) {
                res.json(results)
            }
        )

    } catch (err) {
        res.json(err);
    };
});

// ???????????????? 
router.get('/workouts/range', (req, res) => {
    try {
        Workout.find({})


        Workout.aggregate(
            [{
                "$addFields": {
                    "totalDuration": { "$sum": "$exercises.duration" }
                }
            }],
            function(err, results) {
                res.json(results)
            }
        );
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
            })
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
            })
    } catch (err) {
        res.json(err);
    };
});


module.exports = router;