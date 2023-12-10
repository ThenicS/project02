// require .env file
require('dotenv').config();

// connect to the database with AFTER the config vars are processed
require('./config/database');

const express = require('express');
const path = require('path');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const imagesRouter = require('./routes/images');
// >>>>>>>>>>>>>>>>>>>> WORKING ON gallerysRouter <<<<<<<<<<<<<<<<<<<<<<
const gallerysRouter = require('./routes/gallerys');

const collectionRouter = require('./routes/collections');

const errorControllers = require('./controllers/error');
const { error } = require('console');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// imagesRouter use
app.use('/', imagesRouter);
// >>>>>>>>>>>>>>>>>>

// galleryRouter use
app.use('/', gallerysRouter);
// >>>>>>>>>>>>>>>>>>

// collectionRouter use
app.use('/', collectionRouter);
// >>>>>>>>>>>>>>>>>>

// error page
app.use(errorControllers.get404Page);
// >>>>>>>>>>>>>>>>>>

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
