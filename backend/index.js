//Requirements 
const express = require('express');
const morgan = require('morgan'); //to see http request
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const { mogoose } = require('./database');


const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Passport Middleware 
app.use(passport.initialize());
app.use(passport.session());
require('./passport')(passport);

//Static Files
app.use(express.static(__dirname+'/Public'));

//Routes
app.use('/catalogue',require('./routes/app.routes'));
app.use('/users', require('./routes/user.routes'));
app.use('/comments', require('./routes/commentary.routes'));
app.use('/category', require('./routes/category.routes'));
app.use('/download', require('./routes/download.routes'));
app.use('/posts', require('./routes/new.routes'));
app.use('/rating', require('./routes/rating.routes'));

//Server Init
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});