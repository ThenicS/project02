// require .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const imagesRouter = require('./routes/images');
const errorControllers = require('./controllers/error');
const { error } = require('console');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// imagesRouter use
app.use('/', imagesRouter);

app.use('/images/search', imagesRouter);

app.use('/images/show', imagesRouter);

app.use('images:id', imagesRouter);
// >>>>>>>>>>>>>>>>>>

// error page
app.use(errorControllers.get404Page);
// >>>>>>>>>>>>>>>>>>

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
