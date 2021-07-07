const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [
        {
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            weight: {
                type: Number,
                required: true
            },
            sets: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            distance: {
                type: Number,
            }
        }
    ]
});

module.exports = mongoose.model('workout', workoutSchema);