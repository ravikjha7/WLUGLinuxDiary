const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    college: {
        type: String,
        required: true
    },
    time: {
        type: String,
        default: new Date().toLocaleDateString()
    }
});

module.exports = Mongoose.model('User', UserSchema);