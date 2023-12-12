const express = require('express');
const router = express.Router();

const collectionsCtrl = require('../controllers/collections');

router.get('/collections', collectionsCtrl.collectionsSet);

router.get('/collections/:id', collectionsCtrl.collectionShow);

module.exports = router;
