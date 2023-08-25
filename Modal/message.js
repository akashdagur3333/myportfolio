const mongoose=require('mongoose')

var Message=mongoose.model("messages",{
    _id:{type:Number},
    name:{type:String},
    email:{type:String},
    subject:{type:String},
    message:{type:String},
    created_at:{type:Date},
    updated_at:{type:Date}
})

module.exports={Message}