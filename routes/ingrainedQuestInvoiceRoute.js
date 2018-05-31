var express = require('express');
var router = express.Router();
var IQInvoiceController = require('../controllers/ingrainedQuestInvoiceController');

// GET request for creating Invoice. NOTE This must come before route for id (i.e. display Invoice).
router.get('/Invoice/create', IQInvoiceController.InvoiceCreateGet);

// POST request for creating Invoice.
router.post('/Invoice/create', IQInvoiceController.InvoiceCreatePost);

// GET request to delete Invoice.
router.get('/Invoice/:id/delete', IQInvoiceController.InvoiceDeleteGet);

// POST request to delete Invoice.
router.post('/Invoice/:id/delete', IQInvoiceController.InvoiceDeletePost);

// GET request to update Invoice.
router.get('/Invoice/:id/update', IQInvoiceController.InvoiceUpdateGet);

// POST request to update Invoice.
router.post('/Invoice/:id/update', IQInvoiceController.InvoiceUpdatePost);

// GET request for one Invoice.
router.get('/Invoice/:id', IQInvoiceController.InvoiceDetail);

// GET request for list of all Invoices.
router.get('/Invoices', IQInvoiceController.InvoiceList);

// GET request for Invoice Controller Home.
router.get('/', IQInvoiceController.InvoiceList);

module.exports = router;


