const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({
    username: {type: String, require: true, index:{unique: true} },
    email: { type: String, require: true, index:{unique: true} },
    password: {type: String, require: true},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('user', userSchema)
