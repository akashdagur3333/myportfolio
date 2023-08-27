const mongoose=require('mongoose')

var Admin=mongoose.model("admins",{
    _id:{type:Number},
    name:{type:String},
    phoneNo:{type:Number},
    password:{type:String},
    role:{type:String},
    created_at:{type:Date},
    updated_at:{type:Date}
})

module.exports={Admin}