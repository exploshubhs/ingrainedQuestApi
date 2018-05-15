var express = require('express');
var router = express.Router();
var IQUserController = require('../controllers/ingrainedQuestUsersController');

// GET request for creating User. NOTE This must come before route for id (i.e. display User).
router.get('/User/create', IQUserController.userCreateGet);

// POST request for creating User.
router.post('/User/create', IQUserController.userCreatePost);

// GET request to delete User.
router.get('/User/:id/delete', IQUserController.userDeleteGet);

// POST request to delete User.
router.post('/User/:id/delete', IQUserController.userDeletePost);

// GET request to update User.
router.get('/User/:id/update', IQUserController.userUpdateGet);

// POST request to update User.
router.post('/User/:id/update', IQUserController.userUpdatePost);

// GET request for one User.
router.get('/User/:id', IQUserController.userDetail);

// GET request for list of all Users.
router.get('/Users', IQUserController.userList);

// GET request for User Controller Home.
router.get('/', IQUserController.userList);

module.exports = router;


