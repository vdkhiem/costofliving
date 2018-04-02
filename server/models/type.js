const mongoose = require('mongoose');

let Type = mongoose.model('Type', {
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 1,
        trim: true
    }
});

module.exports = {Type};