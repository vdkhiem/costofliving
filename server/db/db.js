const {mongoose} = require('./mongoose');
const {MongoClient, ObjectID} = require('mongodb'); 

module.exports.saveDocument = (newDocument) => {
    return new Promise((resolve, reject) => {
        newDocument.save().then((doc) => {
            console.log('Successed save: ', JSON.stringify(doc, undefined, 2));
            resolve(doc);
        }, (err) => {
            console.log('Failed to created: ', doc);
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


