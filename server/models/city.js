const mongoose = require('mongoose');
const {MongoClient, ObjectID} = require('mongodb'); 

let City = mongoose.model('City', {
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 1,
        trim: true
    },
    currency_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Currency is required']
    },
    country_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Country is required']
    }
});

module.exports = {City};