const  userRouter=require('express').Router()
const userController=require('../controller/userController')

userRouter.post('/register',userController.register)
userRouter.post('/login',userController.login)
userRouter.get('/delete/:id',userController.deleteUser)
userRouter.get('/find-users',userController.findUser)
userRouter.get('/find-moderators',userController.findModerator)
userRouter.get('/promote/:id',userController.promoteToModerator)
userRouter.get('/demote/:id',userController.demoteToUser)

module.exports=userRouter