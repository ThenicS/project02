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
    collectionNew,
};

async function collectionsSet(req, res) {
    const collections = await Collection.find({});
    res.render('collections/collection', {
        collections: collections,
        pageTitle: 'Collections',
        path: '/collections',
    });
    // res.send(collections);
}

async function collectionShow(req, res) {
    const objId = req.params.id;
    console.log(objId);
    const collection = await Collection.findOne({ _id: objId }).populate(
        'image'
    );
    // .exec();
    console.log(collection);
    const imageSet = collection.image;

    res.render('collections/collectionShow', {
        collection: collection,
        imageSet: imageSet,
        pageTitle: 'Collections',
        path: '/collections',
    });
}

async function collectionNew(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    console.log('Title: ', title);
    console.log('Description: ', description);
    const collection = await Collection.create({
        title: title,
        description: description,
    });
    console.log(collection);
    res.redirect('/collections');
}
