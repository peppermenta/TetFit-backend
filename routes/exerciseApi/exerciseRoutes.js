const express = require('express');
const router = express.Router();
const Exercise = require('../../models/exercise-model.js');


router.get('/',(req,res)=>{
    //Leave Endpoint Unsecured
    Exercise.find({},(err,result) => {
        if(err){
            console.log(err);
        } else {
            res.header("Content-Type",'application/json');
            res.json(result);
        }
    });
});

router.post('/',(req,res) => {
    //Add JWT Check to See if Valid Request??
    const newExercise = new Exercise({
        name: req.body.name,
        bodyPart: req.body.bodyPart,
        description: req.body.description,
        rating: req.body.rating,
        intensity: req.body.intensity,
        numRatings: req.body.numRatings,
        ytUrl: req.body.ytUrl
    });

    Exercise.findOne({name: req.body.name})
        .then((exerciseFound) => {
            if(exerciseFound){
                res.send('Exercise already exists in DB');
            }
        })
        .catch((err) => {
            console.log('DB Error while Posting', err);
            
        });

    newExercise.save()
        .then((exercise) => {
            res.send(`Successfully Added New Exercise \n${exercise}`);
        })
        .catch((err) => {
            res.send(err.message);
        })

});

module.exports = router;
