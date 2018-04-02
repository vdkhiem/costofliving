const mongoose = require('mongoose');

let Item = mongoose.model('Item', {
    item_type_id: {
        type: Schema.Types.ObjectId,
        required: [true, 'Type is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: 1,
        trim: true
    },
    is_default_item: {
        type: Boolean
    }    
});

module.exports = {Item};