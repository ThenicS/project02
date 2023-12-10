const express = require('express');
const router = express.Router();

const collectionsCtrl = require('../controllers/collections');

router.get('/collections', collectionsCtrl.collectionsIndex);

module.exports = router;
