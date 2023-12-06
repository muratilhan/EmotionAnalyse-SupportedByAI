const mongoose = require('mongoose');
const TestResult = require('./TestResult');
const Feedback = require('./Feedback');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
        
    },
    testResult: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TestResult'        
        }
    ],
    feedback: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Feedback'
        },
      ],

}, { timestamps: true })

module.exports = mongoose.model('User',userSchema)