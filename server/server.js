const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var cors = require('cors');
const app = express();

//usages
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// TOKEN AUTHENTICATION- ALL THE ROUTES WRITTEN BELOW THIS WILL NEED TOKEN TO BE SENT in request headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    next();
});

//using routes
app.use('/api/todo', require('./routes/index'));


mongoose
    .connect('mongodb://127.0.0.1:27017/tododb', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
       useFindAndModify: false
    })
    .then(() => {
        console.log("Server has started.......")
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });