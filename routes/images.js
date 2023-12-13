const express = require('express');
const router = express.Router();
const passport = require('passport');

const imagesCtrl = require('../controllers/images');
// const gallerysCtrl = require('../controllers/gallerys');

// const ensureLoggedIn = require('../config/ensureLoggedin');

// router.use(ensureLoggedIn);

router.get('/', imagesCtrl.home);

router.get('/images/search', imagesCtrl.search);

router.post('/images/show', imagesCtrl.showimages);

router.get('/images/:id', imagesCtrl.imageindex);

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);

router.get(
    '/oauth2callback',

    passport.authenticate('google', {
        successRedirect: '/',

        failureRedirect: '/',
    })
);

router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// router.post('/gallery', gallerysCtrl.saveGallerys);

module.exports = router;
