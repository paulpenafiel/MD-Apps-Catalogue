const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userC = require('../controllers/user.controller');
const passport = require('passport');


//Get all Users
router.get('/',userC.getUsers);

//Search a user
router.get('/selected/:idC', userC.getUser);

//Register
router.post('/register', userC.createUser);

//authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    userC.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: '¡Usuario no encontrado!' });
        }

        userC.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({data: user}, 'SecretString', {
                    expiresIn: 604800
                });
                res.json({
                    success: true,
                    token: 'Bearer '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        usertype: user.usertype,
                        organization: user.organization,
                        gender: user.gender,
                        email: user.email,
                        username: user.username,
                        imgPath: user.imgPath,
                        password: user.password
                    }
                });
            } else {
                return res.json({ succes: false, msg: '¡Contraseña Incorrecta!' });
            }
        });
    });
});

//Profile
router.get('/Profile', passport.authenticate('jwt', {session: false}), (req, res, next) =>{
    res.json({user: req.user});
});

//Validation
router.get('/validate', (req, res, next) => {
    res.send('validate');
});

//Change Image
router.put('/img/:id',userC.changeImage);


module.exports = router;