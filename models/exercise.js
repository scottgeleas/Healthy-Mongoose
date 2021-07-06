const mongoose = require('mongoose');
/* name, type, weight, sets, reps, and duration of 
exercise. If the exercise is a cardio exercise, I 
should be able to track my distance traveled. */
const exerciseSchema = new mongoose.Schema({
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
    cardio: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('exercise', exerciseSchema);