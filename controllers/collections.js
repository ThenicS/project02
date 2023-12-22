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
    collectionUpdate,
    collectionRemove,
    collectionEditTitle,
};

async function collectionsSet(req, res) {
    const collections = await Collection.find({ user: res.locals.user._id });
    res.render('collections/collection', {
        collections: collections,
        pageTitle: 'Collections',
        path: '/collections',
    });
}

async function collectionShow(req, res) {
    const objId = req.params.id;
    console.log(objId);
    const collection = await Collection.findOne({
        _id: objId,
        user: res.locals.user._id,
    }).populate('image');
    // .exec();
    // console.log(collection);
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
        user: res.locals.user,
    });
    // console.log(collection);
    res.redirect('/collections');
}

async function collectionUpdate(req, res) {
    const collection_id = req.params.id;
    const image_id = req.body.image_id;
    // >>>>>>>> <<<<<<<<
    const collection = await Collection.findOne({ _id: collection_id });
    const image = await Gallery.findOne({ _id: image_id });
    // console.log(collection);
    // console.log(image);
    collection.image.push(image);
    await Promise.all([collection.save(), image.save()]);
    res.redirect(`/collections/${collection_id}`);
}

async function collectionRemove(req, res) {
    const objId = req.params.id;
    const gallery = await Collection.findOneAndDelete({
        _id: objId,
    });
    res.redirect('/collections');
}

async function collectionEditTitle(req, res) {
    const objId = { _id: req.body.collection_id };
    const title = { title: req.body.title };
    // console.log(title);
    // console.log(objId);
    const collection = await Collection.findByIdAndUpdate(objId, title, {
        returnOriginal: false,
    });
    await collection.save();
    console.log(collection);
    res.redirect('/collections');
}
