const express =require('express');
const router =express.Router()



router.post('/user')

router.get('/user')

router.get('/user/:id')


router.put('/user/:id')

router.delete('/user/:id')
module.exports=router;