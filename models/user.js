const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        googleId: {
            type: String,
            require: true,
        },
        email: String,
        avatar: String,
        gallery: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Gallery',
                require: true,
            },
        ],
        // collections: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Collections',
        //         require: true,
        //     },
        // ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
