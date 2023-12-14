const express = require('express');
const router = express.Router();

const collectionsCtrl = require('../controllers/collections');

router.get('/collections', collectionsCtrl.collectionsSet);

// router.get('/collections/new', function (req, res) {
//     res.render('collections/collectionNew');
// });

router.post('/collections', collectionsCtrl.collectionNew);

router.get('/collections/:id', collectionsCtrl.collectionShow);

router.post('/collections/:id', collectionsCtrl.collectionUpdate);

router.delete('/collections/:id', collectionsCtrl.collectionRemove);

module.exports = router;
