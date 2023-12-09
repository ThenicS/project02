const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collectionsSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            default: 'No Title',
        },
        id: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
            require: true,
            default: 'Write your description here',
        },
        images: [col_imageSchema],
    },
    {
        timpstamps: true,
    }
);

const col_imageSchema = new Schema(
    {
        id: {
            type: Number,
            require: true,
        },
        photographer: {
            type: String,
            require: true,
            default: 'Not Found',
        },
        pexelUrl: {
            type: String,
            require: true,
            default: 'https://www.pexels.com/',
        },
        ima_original: {
            type: String,
            require: true,
            default:
                'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg',
        },
        ima_large2x: {
            type: String,
            require: true,
            default:
                'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        alt: {
            type: String,
            require: true,
            default: 'No Title',
        },
    },
    {
        timestamps: true,
    }
);

// Compile the schema into a model and export it
module.exports = mongoose.model('Collections', collectionsSchema);

// images: [
//         {
//             id: 19269504,
//             photographer: 'Mehmet Turgut  Kirkgoz',
//             url: 'https://www.pexels.com/photo/young-woman-in-a-white-dress-holding-a-tiny-bunny-19298399/',
//             img_original:
//                 'https://images.pexels.com/photos/19269504/pexels-photo-19269504.jpeg',
//             img_large2x:
//                 'https://images.pexels.com/photos/19269504/pexels-photo-19269504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//             alt: 'deer',
//         },
//     ]
