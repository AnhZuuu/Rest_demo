var express = require('express');
var userRouter = express.Router();
const userController = require('../controller/userController');

userRouter.route('/')
.get(userController.register)
.post(userController.signup)

userRouter.route('/login')
.get(userController.login)




module.exports = userRouter;
