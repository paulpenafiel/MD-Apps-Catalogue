const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

//User Schema
const UserSchema= new Schema({
    name: { type: String},
    usertype: {type: String},
    organization: {type: String},
    gender: {type: String},
    email: {type: String, required: true},
    username: {type: String, required:true},
    imgPath: {type: String, default: 'https://pngimage.net/wp-content/uploads/2018/06/logo-user-png-6.png'},
    password: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);

//generate a hash to password attribute
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;
            newUser.password= hash;
            newUser.save(callback);
        });
    });
}

