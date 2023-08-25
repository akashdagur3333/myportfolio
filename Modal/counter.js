const mongoose =require('mongoose');

var counterSchema =mongoose.model("counter",{
    id:{type:String},
    seq:{type:Number}
});

module.exports= counterSchema;