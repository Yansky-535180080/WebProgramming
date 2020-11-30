const db = require('./Database.js');

const Member = require("../models/Member");

// const inputEmail = 'email.email.com';
// const inputPass = 'password';
// const reTypePass = 'password';

// if (inputPass === reTypePass) {
//     const newMember = new Member({
//         name: "newMember", 
//         email: inputEmail, 
//         password: inputPass
//     });

//     newMember.save((err, product) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// }
// else {

// }

// const registerMember = Member.updateOne({
//     "name": "user"
// }, { "email": "changed@db.com" }).exec((err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     if (data) {
//         data
//     }
// });

// const newMember = new Member({
//     "name": "user", 
//     'email': "user@user.com", 
//     "password": "password"
// }).save((err, data) => {
//     if (err) {
//         console.log(err);
//     }
// });

db.close();