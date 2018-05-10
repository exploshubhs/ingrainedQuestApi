'use strict';
module.exports =  function (app) {
  var ingrainedQuestUsers = require('../controllers/ingrainedQuestController');

  // IngrainedQuest Routes For User EndPoint
  app.route('/users')
    .get(ingrainedQuestUsers.listUsers);
  
    // app.route('/users/:userId')
    // .get(ingrainedQuestUsers.getUser);
}
