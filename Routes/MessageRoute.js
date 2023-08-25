const express=require('express')
const messageController=require('../Controller/messageController')
var router=express.Router()


router.post('/message',messageController.addMessage)

module.exports=router