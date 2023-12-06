const express = require('express');
const Feedback = require('../models/Feedback');
const User = require('../models/User');
const router = express.Router();




router.get('/:id', async (req, res) => {
    const feedback = await Feedback.findById(req.params.id)
    res.status(200).json(feedback)
})

// router.get('/', async (req, res) => {
//     const feedbacks = await Feedback.find({}).sort({createdAt:-1}) 
//     res.status(200).json(feedbacks)
// })


router.get('/', async (req, res) => {
    try{
        const items = await Feedback
        .find()
        .populate({ path: 'user'});
        res.send(items)
    }catch(err){
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try{
        const newFeedback = new Feedback({
            comment: req.body.comment,
            rating: req.body.rating,
            user: req.body.userID
        })    
        const feedback = await newFeedback.save();
        res.status(200).json(feedback)
    }catch(err){
        console.log(err)
    }
})

router.delete('/', async (req, res) => {
       try{
        await Feedback.deleteMany()
        return res.status(200).json("silindi")
       }catch(err){
        console.log(err)
       } 
})


router.delete('/:id', async (req, res) => {
    try{
        const user = await Feedback.findById(req.params.id)
        try{
            await user.delete();
            res.status(200).json(user)
        }catch(err){
            res.status(400).json(err)
        }
    }catch(err){
        res.status(400).json(err);
    }
})

module.exports = router