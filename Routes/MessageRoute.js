const express=require('express')
const messageController=require('../Controller/messageController')
var router=express.Router()


router.post('/message',messageController.addMessage)
router.get('/message',messageController.getMessage)
router.delete('/message/:id',messageController.deleteMessage)

module.exports=router