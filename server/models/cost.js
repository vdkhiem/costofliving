const mongoose = require('mongoose');

let Cost = mongoose.model('Cost', {
    item_id: {
        type: Schema.Types.ObjectId,
        required: [true, 'Item is required']
    },
    city_id: {
        type: Schema.Types.ObjectId,
        required: [true, 'City is required']
    },
    currency_id: {
        type: Schema.Types.ObjectId,
        required: [true, 'Currency is required']
    }, 
    cost: {
        type: Number
    },  
});

module.exports = {Cost};