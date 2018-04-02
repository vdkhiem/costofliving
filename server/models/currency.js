const mongoose = require('mongoose');

let Currency = mongoose.model('Currency', {
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 1,
        trim: true
    },
    short_name: {
        type: String,
        required: [true, 'Shortname is required'],
        minlength: 1,
        trim: true
    },
    sign: {
        type: String,
        required: [true, 'Sign is required'],
        minlength: 1,
        trim: true
    }
});

module.exports = {Currency};