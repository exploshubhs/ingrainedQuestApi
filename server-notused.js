var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  //require a PostgreSQL instance
  postgreSQL = require('pg');

  IngrainedQuestUser = require('./api/models/ingrainedQuestModels'),
  bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./api/routes/ingrainedQuestRoutes'); //importing route
  routes(app); //register the route

  app.listen(port);

  console.log('IngrainedQuest RESTful API server started on: ' + port);