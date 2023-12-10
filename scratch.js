require('dotenv').config();
require('./config/database');

const Collection = require('./models/collection');
const Gallery = require('./models/gallery');

run();
async function run() {
    const gallery = await Gallery.create({ id: 2 });
    console.log(gallery);
}
