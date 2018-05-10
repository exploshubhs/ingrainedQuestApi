// 'use strict';
// module.exports =  function (app) {
//   var ingrainedQuestUsers = require('../controllers/ingrainedQuestController');

//   // IngrainedQuest Routes For User EndPoint
//   app.route('/users')
//     .get(ingrainedQuestUsers.listUsers);
  
//     // app.route('/users/:userId')
//     // .get(ingrainedQuestUsers.getUser);
// }


var express = require('express');
var router = express.Router();
var IQUserController = require('../controllers/ingrainedQuestUsersController');

// GET request for creating User. NOTE This must come before route for id (i.e. display User).
router.get('/User/create', IQUserController.user_create_get);

// POST request for creating User.
router.post('/User/create', IQUserController.user_create_post);

// GET request to delete User.
router.get('/User/:id/delete', IQUserController.user_delete_get);

// POST request to delete User.
router.post('/User/:id/delete', IQUserController.user_delete_post);

// GET request to update User.
router.get('/User/:id/update', IQUserController.user_update_get);

// POST request to update User.
router.post('/User/:id/update', IQUserController.user_update_post);

// GET request for one User.
router.get('/User/:id', IQUserController.user_detail);

// GET request for list of all Users.
router.get('/Users', IQUserController.user_list);

// GET request for User Controller Home.
router.get('/', IQUserController.user_list);

module.exports = router;


