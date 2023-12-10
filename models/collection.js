const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
        ima_Original: {
            type: String,
            require: true,
            default:
                'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg',
        },
        ima_Large2x: {
            type: String,
            require: true,
            default:
                'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        ima_Large: {
            type: String,
            require: true,
            default:
                'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
        ima_Medium: {
            type: String,
            require: true,
            default:
                'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&h=350',
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
const collectionsSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            default: 'No Title',
        },
        // id: {
        //     type: Number,
        //     require: true,
        // },
        description: {
            type: String,
            require: true,
            default: 'Write your description here',
        },
        images: [col_imageSchema],
        count: {
            type: Number,
            min: 0,
            max: 9999,
            default: function () {
                const images = [col_imageSchema];
                let count = 0;
                count = images.length + 1;
                return count;
            },
        },
    },
    {
        timpstamps: true,
    }
);
// Compile the schema into a model and export it
module.exports = mongoose.model('Collection', collectionsSchema);

// <<<<<<<<<<<<<<<<<< Examples >>>>>>>>>>>>>>>>>

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
