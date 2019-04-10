const User = require('../models/user');
const bcrypt = require('bcryptjs');
const userCtrl = {};

//Register a user 
userCtrl.createUser = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        usertype: req.body.usertype,
        organization: req.body.organization,
        gender: req.body.gender,
        email: req.body.email,
        username: req.body.username,
        imgPath: req.body.imgPath,
        password: req.body.password
    });

    User.addUser(user, (err, user) => {
        if (err) {
            res.json({ sucess: false, msg: 'User registration failed' });
        } else {
            res.json({ sucess: true, msg: 'User registered' });
        }
    });
};

//Query user by id
userCtrl.getUserById = function (id, callback) {
    User.findById(id, callback);
};

//Query user by username
userCtrl.getUserByUsername = function (userName, callback) {
    const query = { username: userName }
    User.findOne(query, callback);
};

//compare generated hash
userCtrl.comparePassword = function(testPassword, hash, callback){
    bcrypt.compare(testPassword, hash, (err, isMatch) =>{
        if(err) throw err;
        callback(null, isMatch);
    });
};

//Query a User by parameter
userCtrl.getUser = async(req, res) =>{
    const user= await User.findById(req.params.idC);
    res.json(user);
};

//Query all users
userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
}; 

//Change User image
userCtrl.changeImage = async (req, res) =>{
    const { id } = req.params;
    const imgPath = req.body.imgPath;
    // await Commentary.findByIdAndUpdate({_id: ObjectId(id)}, {$set: {status: 'bloqueado'}});
    await User.findByIdAndUpdate(id, {$set:{imgPath: imgPath}});
    res.json({status: 'Imagen Actualizada'});
}
module.exports = userCtrl;