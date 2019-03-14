const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userC = require('./controllers/user.controller');

//Generates a payload with a token [changes according to the version] 
module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'SecretString';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) =>{
        console.log(jwt_payload);
        userC.getUserById(jwt_payload.data._id, (err, user)=>{
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            }else{
                return done(null, false);
            }
        });       
    })); 
}
