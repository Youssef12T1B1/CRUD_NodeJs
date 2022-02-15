const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    username :{
         type: String,
         required: true,
         lowercase: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
        lowercase: true,
        

    },
   gender:String,
   status:String
     
},{ timestamps: true}); 





const User = mongoose.model('user', userSchema);

module.exports= User