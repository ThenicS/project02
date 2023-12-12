// require .env file >>>>>>>>>>>>>>>>>>>>> (((IN CASE))) <<<<<<<<<<<<<<<<<<<<<<
require('dotenv').config();
// require models
const Collection = require('../models/collection');
const Gallery = require('../models/gallery');
// apiKey
const apiKey = `${process.env.API_KEY}`;

module.exports = {
    collectionsSet,
    collectionShow,
};

async function collectionsSet(req, res) {
    const collections = await Collection.find({});
    res.render('collections/collection', { collections: collections });
    // res.send(collections);
}

async function collectionShow(req, res) {
    const objId = req.params.id;
    const collection = await Collection.findOne({ _id: objId }).populate(
        'image'
    );
    // .exec();
    // console.log(collections);
    const imageSet = collection.image;

    res.render('collections/collectionShow', {
        collection: collection,
        imageSet: imageSet,
    });
}
