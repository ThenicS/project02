require('dotenv').config();
require('./config/database');

const Collection = require('./models/collection');
const Gallery = require('./models/gallery');

// main();
addCollection();
// showprint();
// deleteCollection();
// createCollection();

// Test Gallery models
async function main() {
    const gallerys = await Gallery.find();
    // gallerys.then((data) => {
    //     console.log((data))
    // })
    console.log(gallerys);
}

async function createCollection() {
    const collection = await Collection.create({
        title: 'cat',
        description: 'cute cat',
    });
    console.log(collection);
}

//  Test push collection to gallerys

async function addCollection() {
    const collection = await Collection.findOne({
        title: 'cat',
    });
    console.log(collection);
    const cat = await Gallery.findOne({ _id: '65786c951f4c077eca1843ae' });
    console.log(cat);
    //>>>>>>
    collection.image.push(cat);
    await cat.save();
    await collection.save();
    console.log(collection);
}

async function showprint() {
    const dogCol = await Collection.findOne({
        _id: '657834d8e05423f398f1d864',
    }).populate('image');
    console.log(dogCol);
}

async function deleteCollection() {
    const collection = await Collection.findOneAndDelete({
        _id: '65780adb85d7eec79bebdf45',
    });
}
