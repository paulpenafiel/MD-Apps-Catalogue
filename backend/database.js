const mongoose = require('mongoose');
const dbLocation = 'mongodb://localhost/db-catalogue';

mongoose.connect(dbLocation)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

module.exports = mongoose;
