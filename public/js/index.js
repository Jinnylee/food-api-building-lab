// $(document).ready(function () {
//   $('#signup').on('submit', function (e) {
//     e.preventDefault();
//     $('#signup-form-message').text('');

//     var user = {
//       email    : $('#signup [name="email"]').val(),
//       name     : $('#signup [name="name"]').val(),
//       username : $('#signup [name="username"]').val(),
//       password : $('#signup [name="password"]').val()
//     };

//     // console.log(user.email, user.name, user.username, user.password);

// // do validation here. only continue if validation pass

//     $.ajax({
//       method: "POST",
//       url: '/api/users',
//       data: user,
//         //{
//           // email: email.val(),
//           // name: name,
//           // username: username,
//           // password: password

//         //}
//       success: function(response) {
//         console.log(response);
//         $('#signup-form-message').text("Created User");

//         $('#signup [name="email"]').val(''),
//         $('#signup [name="name"]').val(''),
//         $('#signup [name="username"]').val(''),
//         $('#signup [name="password"]').val('')
//       },
//       error: function(response) {
//         console.log(response);
//         $('#signup-form-message').text(response.responseJSON.message);
//       }
//     });

//   });

//   $('#signin').on('submit', function (e) {
//     e.preventDefault();
//   });
// });