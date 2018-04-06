const {mongoose} = require('./mongoose');
const {MongoClient, ObjectID} = require('mongodb'); 

module.exports.insertDocument = (newDocument) => {
    return new Promise((resolve, reject) => {
        newDocument.save().then((doc) => {
            console.log('Successed add: ', JSON.stringify(doc, undefined, 2));
            resolve(doc);
        }, (err) => {
            console.log('Failed to add: ', doc);
            reject(err);
        });
    });
};


module.exports.removeDocument = (Document, id) => {
    return new Promise((resolve, reject) => {
        Document.findByIdAndRemove(id).then((doc) => {
            console.log('Successed delete: ', JSON.stringify(doc, undefined, 2));
            resolve(doc);
        }, (err) => {
            console.log('Failed to delete: ', doc);
            reject(err);
        });
    });
};

module.exports.updateDocument = (Document, id, body) => {
    return new Promise((resolve, reject) => {
        Document.findByIdAndUpdate(id, {$set: body}, {new: true}).then((doc) => {
            console.log('Successed update: ', JSON.stringify(doc, undefined, 2));
            resolve(doc);
        }, (err) => {
            console.log('Failed to update: ', doc);
            reject(err);
        });
    });
};

// Insert test data
// saveDocument(new Country({
//     name:'New Zealand'
// }))
// .then(country => {
//     saveDocument(new Currency({
//         name: 'New Zealand Dollar',
//         short_name: 'NZD',
//         sign: '$'
//     })).then((currency) => {
//         saveDocument(new City({
//             name: 'Auckland',
//             country_id: country._id,
//             currency_id: currency._id
//             })
//         )
//     }, err => {
//         console.log(err);
//     })
// })


