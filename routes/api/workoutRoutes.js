const express = require('express');
const router = express.Router();
const Workout = require('../../models/workout');

// PUT add exercise
router.put('/workouts/:id', (req, res) => {
    try {
        Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } }
            )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
        } catch (err) {
            res.json(err);
        }
    });

    // get last workout all workouts
    router.get('/workouts', (req, res) => {
        try {
            Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
        }
        catch (err) {
            res.json(err);
        };
    });
    
    // POST create workout
    router.post("/workouts", (req, res) => {
        try {
            Workout.create({})
            .then(dbWorkout => {
                console.log("somthing2222")
                console.log(dbWorkout)
                res.json(dbWorkout);
            })
        } catch (err) {
            res.json(err);
        };
    });

    router.get('/workouts/range', () => {
        try {
            Workout.find({})
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
        }
        catch (err) {
            res.json(err);
        };
    });
    
    module.exports = router;