const express=require('express')
const adminController=require('../Controller/AdminControler')
var router=express.Router()


router.post('/addAdmin',adminController.addAdmin)
router.post('/login',adminController.login)
router.get('/addAdmin',adminController.getAllAdmin)
router.delete('/addAdmin/:id',adminController.deleteAdmin)
module.exports=router