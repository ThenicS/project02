// require .env file >>>>>>>>>>>>>>>>>>>>> (((IN CASE))) <<<<<<<<<<<<<<<<<<<<<<
require('dotenv').config();
// require models
const Collection = require('../models/collection');
const Gallery = require('../models/gallery');
// apiKey
const apiKey = `${process.env.API_KEY}`;

module.exports = {
    showGallerys,
    saveGallerys,
    indexGallerys,
    galleryRemove,
};

async function showGallerys(req, res) {
    const gallerys3 = await Gallery.find({});
    // console.log(gallerys);
    // console.log(res.locals.user);
    // console.log(res.locals.user._id);
    // >>>>>>>>>>>>>>>>>>>>>
    const gallerys2 = await Gallery.find({}).populate('user');
    // console.log(res.locals.user.name);
    // console.log(gallerys2);
    // >>>>>>>>>>>>>>>>>>>>
    const gallerys = await Gallery.find({ user: res.locals.user._id });
    res.render('gallerys/gallery', {
        gallerys: gallerys,
        pageTitle: 'Gallery',
        path: '/gallery',
    });
}

async function saveGallerys(req, res) {
    const id = req.body.id;
    const photographer = req.body.photographer;
    const pexelUrl = req.body.pexelUrl;
    const ima_Original = req.body.ima_Original;
    const ima_Large2x = req.body.ima_Large2x;
    const ima_Large = req.body.ima_Large;
    const ima_Medium = req.body.ima_Medium;
    const alt = req.body.alt;
    const gallery007 = req.body;
    gallery007.user = res.locals.user;
    console.log(gallery007);
    // const gallerys = await Gallery.create(req.body);
    const gallerys = await Gallery.create({
        id: id,
        photographer: photographer,
        pexelUrl: pexelUrl,
        ima_Original: ima_Original,
        ima_Large2x: ima_Large2x,
        ima_Large: ima_Large,
        ima_Medium: ima_Medium,
        alt: alt,
        user: res.locals.user,
    });
    // console.log(res.locals.user);
    res.redirect('/gallery');
}

async function indexGallerys(req, res) {
    const objId = req.params.id;
    // console.log(objId);
    const gallery = await Gallery.findOne({
        _id: objId,
        user: res.locals.user._id,
    });
    const collections = await Collection.find({ user: res.locals.user._id });
    // console.log(collections);
    const image = gallery;
    // console.log(image);
    res.render('gallerys/galleryIndex', {
        image: image,
        collections: collections,
        pageTitle: 'Gallery',
        path: '/gallery',
    });
}
async function galleryRemove(req, res) {
    const objId = req.params.id;
    const gallery = await Gallery.findOneAndDelete({
        _id: objId,
    });
    console.log(gallery);
    res.redirect('/gallery');
}
