const express = require('express');
const router = express.Router();

const gallerysCtrl = require('../controllers/gallerys');

router.get('/gallery', gallerysCtrl.showGallerys);

router.post('/gallery', gallerysCtrl.saveGallerys);

router.get('/gallery/:id', gallerysCtrl.indexGallerys);

module.exports = router;
