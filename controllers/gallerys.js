// require .env file >>>>>>>>>>>>>>>>>>>>> (((IN CASE))) <<<<<<<<<<<<<<<<<<<<<<
require('dotenv').config();
// require models
const Collection = require('../models/collection');
const Gallery = require('../models/gallery');
// apiKey
const apiKey = `${process.env.API_KEY}`;

module.exports = {
    showGallerys,
    addImgae,
    saveGallerys,
};

async function showGallerys(req, res) {
    const gallerys = await Gallery.find({});
    console.log(gallerys);
    res.render('gallerys/gallery', { gallerys: gallerys });
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
    // console.log(id);
    // console.log(photographer);
    // console.log(pexelUrl);
    // console.log(ima_Original);
    // console.log(ima_Large2x);
    // console.log(ima_Large);
    // console.log(ima_Medium);
    // console.log(alt);
    const gallerys = await Gallery.create(req.body);
    res.redirect('/gallery');
}

function showGallery(req, res) {
    const id = 12;
}
function addImgae(req, res) {}
