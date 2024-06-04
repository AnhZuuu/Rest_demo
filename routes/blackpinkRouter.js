var express = require('express');
var blackpinkRouter = express.Router();
const blackpinkController = require('../controller/blackpinkController');

blackpinkRouter.route('/')
  .get(blackpinkController.getAll)
  .post(blackpinkController.addBlackpink)
  .delete(blackpinkController.deleteBlackpink)
  .put(blackpinkController.updateBlackpink)
  
blackpinkRouter.route('/:blackpinkID')
  .get(blackpinkController.detailBlackpink)
  .delete(blackpinkController.deleteMember)
  .put(blackpinkController.updateMember)
module.exports = blackpinkRouter;
