const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collectionsSchema = new Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

// Compile the schema into a model and export it
module.exports = mongoose.model('Collections', collectionsSchema);
