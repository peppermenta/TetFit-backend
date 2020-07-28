const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);


const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    bodyPart: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required :true
    },

    rating: {
        type: Float,
        required: true
    },

    intensity: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },

    numRatings: {
        type: Number,
        required: true
    },

    ytUrl: {
        type:String
    }
});

const Exercise = mongoose.model('Exercise',ExerciseSchema);

module.exports = Exercise;
