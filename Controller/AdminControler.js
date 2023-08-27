const {Admin}=require('../Modal/admin')
const counterSchema=require('../Modal/counter')
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

const addAdmin=(req,res)=>{
const phoneNo=req.body.phoneNo

Admin.findOne({phoneNo:phoneNo}).then(result=>{
    if(result){
        res.json('This number is already registered')
    }
    else{
        bcrypt.hash(req.body.password,10,(err,hasspass)=>{
            if(err){
                res.json(err)
            }
            counterSchema.findOneAndUpdate(
                {id:"admin_seq"},
                {"$inc":{"seq":1} },{new:true},
                (err,cd)=>{
                    let seqId;
                    if(cd==null){
                        const newval =new counterSchema({id:"admin_seq",seq:1});
                        newval.save();
                        seqId=1;
                    }
                    else{
                        seqId=cd.seq;
                    }
                    var admin= new Admin({
                        _id:seqId,
                        name:req.body.name,
                        phoneNo:req.body.phoneNo,
                        password:hasspass,
                        role:req.body.role,
                        created_at:Date.now(),
            
                    });
                    admin.save((err,docs)=>{
                        if(!err){
                            res.json(docs);
                        }
                        else{
                            res.json(err);
                        }
                    });
                }
            )
                })
    }
})
 
}

const login=(req,res)=>{
    const phoneNo=req.body.phoneNo
    Admin.findOne({phoneNo:phoneNo}).then(result=>{
        if(result){
        bcrypt.compare(req.body.password,result.password,function(err,comp){
            if(err){
                res.json(err)
            }
            if(comp){
               let token=jwt.sign({result:result},process.env.SECRET_KEY,{expiresIn:'1m'})
               res.json({
                message:"Login Successfully",
                token
               })
            }
        })
        }
        else{
            res.json({
                message:"Admin not found"
            })
        }
    })
}

const getAllAdmin=(req,res)=>{
    Admin.find((err,docs)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(docs)
        }
    })
}

const deleteAdmin=(req,res)=>{
    Admin.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.json(err)
        }
    })
}

module.exports={addAdmin,login,getAllAdmin,deleteAdmin}