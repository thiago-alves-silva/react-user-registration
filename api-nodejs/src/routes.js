const express = require('express');
const router = express.Router();
const UserController = require('./controller/UserController');

router.get('/users', UserController.allUsers);
router.post('/user/', UserController.createUser);
router.get('/user/:id', UserController.readUser);
router.get('/authentication/:email?/:password', UserController.checkUser);

module.exports = router;