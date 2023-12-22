const express = require('express');
const router = express.Router();

const collectionsCtrl = require('../controllers/collections');

router.get('/collections', collectionsCtrl.collectionsSet);

router.post('/collections', collectionsCtrl.collectionNew);

router.get('/collections/:id', collectionsCtrl.collectionShow);

router.post('/collections/:id', collectionsCtrl.collectionUpdate);

router.put('/collections', collectionsCtrl.collectionEditTitle);

router.delete('/collections/:id', collectionsCtrl.collectionRemove);

module.exports = router;
