const express = require('express');
const router = express.Router();

const imagesCtrl = require('../controllers/images');
const gallerysCtrl = require('../controllers/gallerys');

router.get('/', imagesCtrl.home);

router.get('/images/search', imagesCtrl.search);

router.post('/images/show', imagesCtrl.showimages);

router.get('/images/:id', imagesCtrl.imageindex);

// router.post('/gallery', gallerysCtrl.saveGallerys);

module.exports = router;
