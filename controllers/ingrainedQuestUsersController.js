var ingrainedQuestUsers = require('../models/ingrainedQuestUsersModel');

// Display list of all Users.
exports.userList = function(req, res) {
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
exports.userDetail = function(req, res) {
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
exports.userCreateGet = function(req, res) {
   // res.send('NOT IMPLEMENTED: User create GET');
   // creating JSon data
   const userData = {firstname: 'Tejas', lastname: 'Sonpal', username: 'tejas.sonp@gmail.com'};
   ingrainedQuestUsers.createUser(userData).then((response, error) =>{
    if(!error){
        debugger;
        res.send('Inserted '+ response.rowCount + ' user/users in the database ');
    } else {
        res.send('Error Occured In Inserting the User Information In The Database');
    }
});
};

// Handle User create on POST.
exports.userCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: User create POST');
};

// Display User delete form on GET.
exports.userDeleteGet = function(req, res) {
    //res.send('NOT IMPLEMENTED: User delete GET');
    ingrainedQuestUsers.deleteUser(req.params.id).then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Deleted the Information About A User '+ jsonData);
        } else {
            res.send('Error Occured In Deleting the User Information From The Database');
        }
    });
};

// Handle User delete on POST.
exports.userDeletePost = function(req, res) {
    //res.send('NOT IMPLEMENTED: User delete POST');
    ingrainedQuestUsers.deleteUser(req.params.id).then((response, error) =>{
        if(!error){
            debugger;
            var jsonData = JSON.stringify(response.rows);
            res.send('Deleted the Information About A User '+ jsonData);
        } else {
            res.send('Error Occured In Deleting the User Information From The Database');
        }
    });
};

// Display User update form on GET.
exports.userUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST.
exports.userUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};