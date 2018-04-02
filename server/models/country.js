const mongoose = require('mongoose');

let Country = mongoose.model('Country', {
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 1,
        trim: true
    }
});

module.exports = {Country};