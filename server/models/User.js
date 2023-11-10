const mongoose = require('mongoose');

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
    feedback: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Feedback'
        },
      ],
}, { timestamps: true })

module.exports = mongoose.model('User',userSchema)