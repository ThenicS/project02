const express = require('express');
const router = express.Router();
const passport = require('passport');

const gallerysCtrl = require('../controllers/gallerys');

router.get('/gallery', gallerysCtrl.showGallerys);

router.post('/gallery', gallerysCtrl.saveGallerys);

router.get('/gallery/:id', gallerysCtrl.indexGallerys);

// router.get(
//     '/auth/google',
//     passport.authenticate('google', {
//         scope: ['profile', 'email'],
//     })
// );

module.exports = router;
