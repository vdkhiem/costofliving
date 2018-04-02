//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructor ES6

// Connection url
const url = 'mongodb://localhost:27017/';
// Database Name
const dbName = 'AskMe';
// Connect using MongoClient
const errorUnableConnect = 'Unable to connect to MongoDB server';

const open = () => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(errorUnableConnect);
        }
        console.log('Connected to MongoDB server');
        client.close();
    });
}

// Finds by ObjectId
// E.g.
// find('Types', '5ac0440e478f9d065c610655'); 
const findById = (collectionName, id) => {
    MongoClient.connect(url).then(client => {
        let db = client.db(dbName);
      
        db.collection(collectionName).find({_id: new ObjectID(id)}).toArray().then(result => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to fetch ${collectionName}. ${err}` );
        })
        client.close();
    }, err => {
        console.log(errorUnableConnect);
    });;
}

// Finds all or specific documents by filter value
// E.g.
// find('Types', {}); // find all
// find('Types', {name: 'Type 1'}); // find with filter
const find = (collectionName, filterValue) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(errorUnableConnect);
        }
        let db = client.db(dbName);
      
        db.collection(collectionName).find(filterValue).toArray((err, result) => {
            if (err) {
                return console.log(`Unable to fetch ${collectionName}. ${err}` );
            }
            console.log(JSON.stringify(result, undefined, 2));
          });
        client.close();
    });
}

// Inserts one/many documents to collection
// E.g. 
// let types = [{name: 'Type 5'}, {name: 'Type 6'}];
// insert('Types', types);
const insert = (collectionName, value) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(errorUnableConnect);
        }
        let db = client.db(dbName);
      
        db.collection(collectionName).insert(value).then((result) => {
            console.log(JSON.stringify(result.ops, undefined, 2));
            console.log('Timestamp: ', result.ops[0]._id.getTimestamp());
        }, (err) => {
            console.log(`Unable to insert to ${collectionName}. ${err}` );
        });

        client.close();
    });
}

// Updates one/many documents to collection
// E.g. 
// update('Types', '5ac070426026be32004cd00c', {name: 'Type 51'});
// Refer mongodb update operator
const update = (collectionName, id, value) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(errorUnableConnect);
        }
        let db = client.db(dbName);
      
        db.collection(collectionName).findOneAndUpdate({
            _id: new ObjectID(id)
        }, {
            $set: value
        }, {
            returnOriginal:false
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to update to ${collectionName}. ${err}` );
        });

        client.close();
    });
}


// Delete many documents to collection
// E.g. 
// deleteMany('Types', {name: 'Type 8'});
var deleteMany = (collectionName, value) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(errorUnableConnect);
        }
        let db = client.db(dbName);
      
        db.collection(collectionName).deleteMany(value).then((result) => {
            console.log('Deleted', JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete ${collectionName}. ${err}` );
        });

        client.close();
    });
}

// Delete one document to collection
// E.g. 
// deleteOne('Types', {name: 'Type 8'});
// lastErrorObject: {n: 1}, show number of documents was deleted.
var deleteOne = (collectionName, value) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            return console.log(errorUnableConnect);
        }
        let db = client.db(dbName);
      
        db.collection(collectionName).findOneAndDelete(value).then((result) => {
            console.log('Deleted', JSON.stringify(result, undefined, 2));
        }, (err) => {
            console.log(`Unable to delete ${collectionName}. ${err}` );
        });

        client.close();
    });
}

module.exports = {
    findById,
    find,
    insert,
    update,
    deleteOne
}
