const express = require('express');
const User = require('../models/User');
const TestResult = require('../models/TestResult');
const router = express.Router();




router.get('/:id', async (req, res) => {
    const testResults = await TestResult.find({user:req.params.id})
    res.status(200).json(testResults)
})

// router.get('/:userid', async (req, res) => {
//     const testResults = await TestResult.find({}).sort({createdAt:-1}) 
//     res.status(200).json(testResults.user)
// })


router.get('/', async (req, res) => {
    try{
        const items = await TestResult
        .find()
        .populate({ path: 'user'});
        res.send(items)
    }catch(err){
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try{
        const newTestResult = new TestResult({
            commonEmotion: req.body.commonEmotion,
            Igrenmis: req.body.Igrenmis,
            Kizgin: req.body.Kizgin,
            Korkmus: req.body.Korkmus,
            Mutlu: req.body.Mutlu,
            Mutsuz: req.body.Mutsuz,
            Notr: req.body.Notr,
            user: req.body.userID
        })    
        const testResult = await newTestResult.save();
        res.status(200).json(testResult)
    }catch(err){
        console.log(err)
    }
})





module.exports = router