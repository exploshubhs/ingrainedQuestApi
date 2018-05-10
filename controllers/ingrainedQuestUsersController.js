// 'use strict'
// const path = require('path')
// const model = require('../models/ingrainedQuestUsers.js')

// module.exports.showUsers = function (rowsObject) {
//   let markup = ''
//   for (let rowId in rowsObject) {
//     let row = rowsObject[rowId]
//     markup += '<div class="row justify-content-start">' +
//     '<div class="col-xs-2 edit-icons"><a href="#"><img id="edit-pid_' +
//     row.ID + '" class="icon edit" src="' +
//     path.join(__dirname, 'img', 'edit-icon.png') + '"></a>' +
//     '<a href="#"><img id="del-pid_' + row.id +
//     '" class="icon delete" src="' + path.join(__dirname, 'img', 'x-icon.png') +
//     '"></a></div>' +
//     '<div class="col-xs-5 name">' + row.lastname + ',&nbsp;</div>' +
//     '<div class="col-xs-5 name">' + row.firstname + '</div>' +
//     '</div>'
//   }
//   $('#add-user, #edit-user').hide()
//   $('#user-list').html(markup)
//   $('a.nav-link').removeClass('active')
//   $('a.nav-link.user').addClass('active')
//   $('#user').show()
//   $('#user-list img.edit').each(function (idx, obj) {
//     $(obj).on('click', function () {
//       window.view.editUser(this.id)
//     })
//   })
//   $('#user-list img.delete').each(function (idx, obj) {
//     $(obj).on('click', function () {
//       window.view.deleteUser(this.id)
//     })
//   })
// }

// // module.exports.listUsers = function (e) {
// //   model.getUsers();
// // }

//  function listUsers(req, res, next) {
//    alert('Hi');
//  }
// module.exports.addUser = function (e) {
//   $('a.nav-link').removeClass('active')
//   $(e).addClass('active')
//   $('#user').hide()
//   $('#edit-user h2').html('Add User')
//   $('#edit-user-submit').html('Save')
//   $('#edit-user-form input').val('')
//   $('#edit-user-form').removeClass('was-validated')
//   $('#first_name, #last_name')
//     .removeClass('is-valid is-invalid')
//   $('#user_id').parent().hide()
//   $('#edit-user').show()
// }

// module.exports.editUser = function (uid) {
//   $('#edit-user h2').html('Edit User')
//   $('#edit-user-submit').html('Update')
//   $('#edit-user-form').removeClass('was-validated')
//   $('#first_name, #last_name')
//     .removeClass('is-valid is-invalid')
//   $('#user_id').parent().show()
//   uid = uid.split('_')[1]
//   let row = model.getUser(uid)[0]
//   $('#user_id').val(row.ID)
//   $('#first_name').val(row.FirstName)
//   $('#last_name').val(row.LastName)
//   $('#user, #add-user').hide()
//   $('#edit-user').show()
// }

// module.exports.deletePerson = function (uid) {
//   model.deleteUser(uid.split('_')[1], $('#' + uid).closest('div.row').remove())
// }

// module.exports.getFormFieldValues = function (formId) {
//   let keyValue = {columns: [], values: []}
//   $('#' + formId).find('input:visible, textarea:visible').each(function (idx, obj) {
//     keyValue.columns.push($(obj).attr('id'))
//     keyValue.values.push($(obj).val())
//   })
//   return keyValue
// }



// // var mongoose = require('mongoose'),
// //   Task = mongoose.model('Tasks');

// // exports.list_all_tasks = function(req, res) {
// //   Task.find({}, function(err, task) {
// //     if (err)
// //       res.send(err);
// //     res.json(task);
// //   });
// // };




// // exports.create_a_task = function(req, res) {
// //   var new_task = new Task(req.body);
// //   new_task.save(function(err, task) {
// //     if (err)
// //       res.send(err);
// //     res.json(task);
// //   });
// // };


// // exports.read_a_task = function(req, res) {
// //   Task.findById(req.params.taskId, function(err, task) {
// //     if (err)
// //       res.send(err);
// //     res.json(task);
// //   });
// // };


// // exports.update_a_task = function(req, res) {
// //   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
// //     if (err)
// //       res.send(err);
// //     res.json(task);
// //   });
// // };


// // exports.delete_a_task = function(req, res) {


// //   Task.remove({
// //     _id: req.params.taskId
// //   }, function(err, task) {
// //     if (err)
// //       res.send(err);
// //     res.json({ message: 'Task successfully deleted' });
// //   });
// // };


var ingrainedQuestUsers = require('../models/ingrainedQuestUsersModel');

// Display list of all Users.
exports.user_list = function(req, res) {
    res.send('NOT IMPLEMENTED: User list');
};

// Display detail page for a specific User.
exports.user_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
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