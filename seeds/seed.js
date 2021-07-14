const mongoose = require('mongoose');
const Workout = require('../models/workout');
require('dotenv').config();

const url = process.env.DB_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const workoutSeed = [{
        day: new Date(new Date().setDate(new Date().getDate() - 9)),
        exercises: [{
            type: 'resistance',
            name: 'Bicep Curl',
            duration: 20,
            weight: 100,
            reps: 10,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 8)),
        exercises: [{
            type: 'resistance',
            name: 'Skull Crusher',
            duration: 20,
            weight: 120,
            reps: 10,
            sets: 3,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 7)),
        exercises: [{
            type: 'resistance',
            name: 'Bench Press',
            duration: 15,
            weight: 225,
            reps: 5,
            sets: 2,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 6)),
        exercises: [{
            type: 'cardio',
            name: 'Elliptical',
            duration: 40,
            distance: 5,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 5)),
        exercises: [{
            type: 'resistance',
            name: 'Squats',
            duration: 35,
            weight: 110,
            reps: 8,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 4)),
        exercises: [{
            type: 'resistance',
            name: 'Triceps Pull',
            duration: 20,
            weight: 65,
            reps: 10,
            sets: 3,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 3)),
        exercises: [{
            type: 'resistance',
            name: 'Leg Press',
            duration: 15,
            weight: 200,
            reps: 8,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 2)),
        exercises: [{
            type: 'resistance',
            name: 'Bench Press',
            duration: 20,
            weight: 300,
            reps: 10,
            sets: 4,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate() - 1)),
        exercises: [{
            type: 'cardio',
            name: 'Treadmill',
            duration: 30,
            distance: 3,
        }, ],
    },
    {
        day: new Date(new Date().setDate(new Date().getDate())),
        exercises: [{
            type: 'resistance',
            name: 'Hammer Curl',
            duration: 25,
            weight: 50,
            reps: 5,
            sets: 5,
        }, ],
    },
];

Workout.deleteMany({})
    .then(() => Workout.collection.insertMany(workoutSeed))
    .then((data) => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });