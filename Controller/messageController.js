const {Message}=require('../Modal/message')
const counterSchema=require('../Modal/counter')
const addMessage=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"message_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"message_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var message= new Message({
                _id:seqId,
                name:req.body.name,
                email:req.body.email,
                subject:req.body.subject,
                message:req.body.message,
                created_at:Date.now(),

            });
            message.save((err,docs)=>{
                if(!err){
                    res.json(docs);
                }
                else{
                    res.json(err);
                }
            });
        }
    )
}

module.exports={addMessage}