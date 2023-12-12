require('dotenv').config();
require('./config/database');

const Collection = require('./models/collection');
const Gallery = require('./models/gallery');

// resetDB();

async function resetDB() {
    await Promise.all([
        Collection.collection.drop(),
        // Gallery.collection.drop(),
    ]);
}
