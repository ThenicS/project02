const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gallerySchema = new Schema(
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
module.exports = mongoose.model('Gallery', gallerySchema);

// <<<<<<<<<<<<<<<<<< Examples >>>>>>>>>>>>>>>>>

// "id": 19261071,
// "width": 6825,
// "height": 4552,
// "url": "https://www.pexels.com/photo/crow-on-snow-19261071/",
// "photographer": "Andrzej Polska",
// "photographer_url": "https://www.pexels.com/@andrzej-polska-815779371",
// "photographer_id": 815779371,
// "avg_color": "#868DA0",
// "src": {
//     "original": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg",
//     "large2x": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     "large": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//     "medium": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg?auto=compress&cs=tinysrgb&h=350",
//     "small": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg?auto=compress&cs=tinysrgb&h=130",
//     "portrait": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//     "landscape": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//     "tiny": "https://images.pexels.com/photos/19261071/pexels-photo-19261071.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
// },
// "liked": false,
// "alt": "A black bird sitting on a branch in the snow"
