var ingrainedQuestInvoices = require('../models/ingrainedQuestInvoiceModel');

// Display list of all Invoices.
exports.InvoiceList = function(req, res) {
    ingrainedQuestInvoices.getInvoices().then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Getting the Invoice Record List From The Database'+ jsonData);
        } else {
            res.send('Error Occured In Getting the Invoice Record List From The Database');
        }
      });
};

// Display detail page for a specific Invoice.
exports.InvoiceDetail = function(req, res) {
    //res.send('NOT IMPLEMENTED: Invoice detail: ' + req.params.id);
    ingrainedQuestInvoices.getInvoice(req.params.id).then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Getting the Information About A Invoice '+ jsonData);
        } else {
            res.send('Error Occured In Getting the Invoice Information From The Database');
        }
    });
};

// Display Invoice create form on GET.
exports.InvoiceCreateGet = function(req, res) {
   // res.send('NOT IMPLEMENTED: Invoice create GET');
   // creating JSon data
   const InvoiceData = {firstname: 'Tejas', lastname: 'Sonpal', Invoicename: 'tejas.sonp@gmail.com'};
   ingrainedQuestInvoices.createInvoice(InvoiceData).then((response, error) =>{
    if(!error){
        debugger;
        res.send('Inserted '+ response.rowCount + ' Invoice/Invoices in the database ');
    } else {
        res.send('Error Occured In Inserting the Invoice Information In The Database');
    }
});
};

// Handle Invoice create on POST.
exports.InvoiceCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: Invoice create POST');
};

// Display Invoice delete form on GET.
exports.InvoiceDeleteGet = function(req, res) {
    //res.send('NOT IMPLEMENTED: Invoice delete GET');
    ingrainedQuestInvoices.deleteInvoice(req.params.id).then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Deleted the Information About A Invoice '+ jsonData);
        } else {
            res.send('Error Occured In Deleting the Invoice Information From The Database');
        }
    });
};

// Handle Invoice delete on POST.
exports.InvoiceDeletePost = function(req, res) {
    //res.send('NOT IMPLEMENTED: Invoice delete POST');
    ingrainedQuestInvoices.deleteInvoice(req.params.id).then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Deleted the Information About A Invoice '+ jsonData);
        } else {
            res.send('Error Occured In Deleting the Invoice Information From The Database');
        }
    });
};

// Display Invoice update form on GET.
exports.InvoiceUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: Invoice update GET');
};

// Handle Invoice update on POST.
exports.InvoiceUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: Invoice update POST');
};