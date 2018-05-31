var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var IQ_userRouter = require('./routes/ingrainedQuestUsersRoute');
var IQ_invoiceRouter = require('./routes/ingrainedQuestInvoiceRoute');

//Swagger Requirement
var swaggerJSDoc = require('swagger-jsdoc');

var app = express();

 //#region  Swagger Setup Starts
// swagger definition
var swaggerDefinition = {
  info: {
    title: 'IngrainedQuest Swagger API',
    version: '1.0.0',
    description: 'IngrainedQuest RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};
// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./**/routes/*.js','routes.js'],// pass all in array 
  };
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

// serve swagger
 app.get('/swagger.json', function(req, res) {   res.setHeader('Content-Type', 'application/json');   res.send(swaggerSpec); });
//#endregion

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//code for IngrainedQuest routes
app.use('/ingrainedQuestUsers', IQ_userRouter);
app.use('/ingrainedQuestInvoices', IQ_invoiceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
