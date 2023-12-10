require('dotenv').config();
require('./config/database');

const Collection = require('./models/collection');
const Gallery = require('./models/gallery');

run2();

// run();
// async function run() {
//     const gallery = await Gallery.create({ id: 2 });
//     console.log(gallery);
// }

async function run2() {
    const collection = await Collection.updateOne(
        { title: 'animals' },
        {
            $push: {
                images: {
                    id: 19416910,
                    photographer: 'Masood Aslami',
                    pexelUrl: 'https://www.pexels.com/@masoodaslami',
                    ima_Original:
                        'https://images.pexels.com/photos/19416910/pexels-photo-19416910.jpeg',
                    ima_Large2x:
                        'https://images.pexels.com/photos/19416910/pexels-photo-19416910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    ima_Large:
                        'https://images.pexels.com/photos/19416910/pexels-photo-19416910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
                    ima_Medium:
                        'https://images.pexels.com/photos/19416910/pexels-photo-19416910.jpeg?auto=compress&cs=tinysrgb&h=350',
                },
            },
        }
    );
    console.log(collection);
}

// async function run3() {
//     const title = await Collection.findOneAndDelete({ title: 'animals' });

//     console.log(title);
// }
