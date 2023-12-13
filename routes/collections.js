const express = require('express');
const router = express.Router();

const collectionsCtrl = require('../controllers/collections');

router.get('/collections', collectionsCtrl.collectionsSet);

// router.get('/collections/new', function (req, res) {
//     res.render('collections/collectionNew');
// });

router.post('/collections', collectionsCtrl.collectionNew);

router.get('/collections/:id', collectionsCtrl.collectionShow);

module.exports = router;
