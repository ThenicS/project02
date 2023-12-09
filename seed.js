require('dotenv').config();
require('./config/database');

const Collection = require('./models/collection');
const Gallery = require('./models/gallery');

// Test Gallery models
async function main() {
    const gallerys = await Gallery.find();
    // gallerys.then((data) => {
    //     console.log((data))
    // })
    console.log(gallerys);
}

main();
