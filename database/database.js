const mongoose = require('mongoose');

const {
    database
} = require('../key');

mongoose.connect(database.URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));