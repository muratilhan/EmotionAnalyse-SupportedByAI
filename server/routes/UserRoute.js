const express = require('express');
const User = require('../models/User')
const router = express.Router();




router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
})


router.get('/', async (req, res) => {
    const users = await User.find({}).sort({createdAt:-1}) 
    res.status(200).json(users)
})


router.delete('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
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