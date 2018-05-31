'use strict'
const path = require('path')
const fs = require('fs')
const SQL = require('sql')
const view = require(path.join(__dirname,'../views', 'ingrainedQuestInvoiceView.js'))
const pg =   require('pg');
var pgClient=null;
var mainModel = require('../models/main-model');
/*
  Populates the Invoice List.
*/
module.exports.getInvoices = function () {
 return new Promise((resolve, reject) => {
  mainModel.getRecordList('Invoices', '*').then((response, error) =>{
    if(!error){
      console.log('Invoice Model'+ response);
      resolve(response);
    } else {
      reject(error);
    }
  });
})
}
/*
  Fetch a Invoice's data from the database.
*/
module.exports.getInvoice = function (uid) {
  return new Promise((resolve, reject) => {
    mainModel.getRecord(uid, '*', 'Invoices').then((response, error) =>{
      if(!error){
        console.log('Invoice Model'+ response);
        resolve(response);
      } else {
        reject(error);
      }
    });
  })
}
/*
  Deletes a Invoice's data from the database.
*/
module.exports.deleteInvoice = function (uid) {
  return new Promise((resolve, reject) => {
    mainModel.deleteRecord(uid,'Invoices').then((response, error) =>{
      if(!error){
        resolve(response);
      } else {
        reject(error);
      }
    });
  })
}
/*
  Creates a single Invoice's data in the database.
*/
module.exports.createInvoice = function (InvoiceData) {
  return new Promise((resolve, reject) => {
    const sqlQuery = "SELECT public.function_insertinvoicerecord('"+ InvoiceData.firstname +"','"+ InvoiceData.lastname +"','"+ InvoiceData.Invoicename +"')";
    mainModel.createRecord(sqlQuery).then((response, error) =>{
      if(!error){
        resolve(response);
      } else {
        reject(error);
      }
    });
  })
}
