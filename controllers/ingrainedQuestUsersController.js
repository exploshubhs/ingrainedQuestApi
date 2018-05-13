var ingrainedQuestUsers = require('../models/ingrainedQuestUsersModel');

// Display list of all Users.
exports.user_list = function(req, res) {
    ingrainedQuestUsers.getUsers().then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Getting the User Record List From The Database'+ jsonData);
        } else {
            res.send('Error Occured In Getting the User Record List From The Database');
        }
      });
};

// Display detail page for a specific User.
exports.user_detail = function(req, res) {
    //res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
    ingrainedQuestUsers.getUser(req.params.id).then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Getting the Information About A User '+ jsonData);
        } else {
            res.send('Error Occured In Getting the User Information From The Database');
        }
    });
};

// Display User create form on GET.
exports.user_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST.
exports.user_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User create POST');
};

// Display User delete form on GET.
exports.user_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete GET');
};

// Handle User delete on POST.
exports.user_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete POST');
};

// Display User update form on GET.
exports.user_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST.
exports.user_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};