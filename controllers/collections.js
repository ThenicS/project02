// require .env file >>>>>>>>>>>>>>>>>>>>> (((IN CASE))) <<<<<<<<<<<<<<<<<<<<<<
require('dotenv').config();
// require models
const Collection = require('../models/collection');
const Gallery = require('../models/gallery');
// apiKey
const apiKey = `${process.env.API_KEY}`;

module.exports = {
    collectionsIndex,
};

async function collectionsIndex(req, res) {
    const collections = await Collection.find({});
    res.render('collections/collection', { collections: collections });
    // res.send(collections);
}
