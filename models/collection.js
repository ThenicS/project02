const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collectionsSchema = new Schema({
    title: {
        type: String,
        deafult: 'untitle',
    },
    description: {
        type: String,
        default: 'Write you Description here',
    },
    image: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Gallery',
            require: true,
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Collections', collectionsSchema);

// const col_imageSchema = new Schema(
//     {
//         id: {
//             type: Number,
//             require: true,
//         },
//         photographer: {
//             type: String,
//             require: true,
//             default: 'Not Found',
//         },
//         pexelUrl: {
//             type: String,
//             require: true,
//             default: 'https://www.pexels.com/',
//         },
//         ima_Original: {
//             type: String,
//             require: true,
//             default:
//                 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg',
//         },
//         ima_Large2x: {
//             type: String,
//             require: true,
//             default:
//                 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//         },
//         ima_Large: {
//             type: String,
//             require: true,
//             default:
//                 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//         },
//         ima_Medium: {
//             type: String,
//             require: true,
//             default:
//                 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&h=350',
//         },
//         alt: {
//             type: String,
//             require: true,
//             default: 'No Title',
//         },
//     },
//     {
//         timestamps: true,
//     }
// );
// const collectionsSchema = new Schema(
//     {
//         title: {
//             type: String,
//             require: true,
//             default: 'No Title',
//         },
//         id: {
//             type: Number,
//             require: true,
//         },
//         description: {
//             type: String,
//             require: true,
//             default: 'Write your description here',
//         },
//         images: [col_imageSchema],
//     },
//     {
//         timpstamps: true,
//     }
// );
