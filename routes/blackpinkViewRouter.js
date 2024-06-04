var express = require('express');
var blackpinkRouter = express.Router();
const blackpinkController = require('../controller/blackpinkController');

blackpinkRouter.route('/')
.get(blackpinkController.getBlackpink)
.post(blackpinkController.create)

blackpinkRouter.route('/delete/:blackpinkId')
.get(blackpinkController.deleteBlackpink)

module.exports = blackpinkRouter;
