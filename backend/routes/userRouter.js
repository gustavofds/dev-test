const express = require('express');
const userController = require('../controllers/userController');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.registerUser);

router.get('/:id/balance', transactionController.getBalance);
router.get('/:id', userController.getUserById);

module.exports = router;
