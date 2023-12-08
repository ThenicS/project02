const express = require('express');
const router = express.Router();

const imagesCtrl = require('../controllers/images');

router.get('/', imagesCtrl.home);

router.get('/images/search', imagesCtrl.search);

router.post('/images/show', imagesCtrl.showimages);

router.get('/images/:id', imagesCtrl.imageindex);

module.exports = router;
