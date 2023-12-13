// require .env file
require('dotenv').config();

// connect to the database with AFTER the config vars are processed
require('./config/database');
require('./config/passport');

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const PORT = process.env.PORT || 3000;

const imagesRouter = require('./routes/images');
// >>>>>>>>>>>>>>>>>>>> WORKING ON gallerysRouter <<<<<<<<<<<<<<<<<<<<<<
const gallerysRouter = require('./routes/gallerys');

const collectionRouter = require('./routes/collections');

const errorControllers = require('./controllers/error');
const { error } = require('console');

const app = express();
const store = new MongoDBStore({
    uri: process.env.DATABASE_URL,
    collection: 'sessions',
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
        secret: process.env.SECRET,
        store: store,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

// app.use('/test1', (req, res) => {
//     console.log(req.session);
//     req.session.user = {
//         name: 'tonto',
//         id: 'abc123',
//     };
//     // res.cookie('user', 'tonto');
//     res.send("<a href='/test2'>Test 2</a>");
// });

// app.use('/test2', (req, res) => {
//     console.log(req.cookies);
//     console.log(req.session);
//     res.send(`<h1>Hello ${req.session.user.name}</h1>`);
// });

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
