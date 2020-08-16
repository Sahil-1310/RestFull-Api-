const mongoose = require('mongoose')

const Schema =new mongoose.Schema({
    name:{
        type:String,required:true
    },
    tech:{
        type:String,required:true
    },
    Sub:{
        type:String,default:false
    }
});
module.exports=mongoose.model('collection',Schema);