const {mongoose} = require('./db/mongoose');
const {MongoClient, ObjectID} = require('mongodb'); 
const _ = require('lodash');

let express = require('express');
let bodyParser = require('body-parser');
let db = require('./db/db');

let {Country} = require('./models/country');
let {City} = require('./models/city');
let {Currency} = require('./models/currency');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); //bodyParser is middleware

app.post('/currency', (req, res) => {
    db.insertDocument(new Currency({
        name: req.body.name,
        short_name: req.body.short_name,
        sign: req.body.sign
    })).then(currency => {
        res.send(currency);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/currencies', (req, res) => {
    Currency.find().then((currencies) => {
        res.send({currencies});
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/currencies/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid id');
    }

    Currency.findById(id).then((currency) => {        
        res.send({currency});
    }, (error) => {
        res.status(400).send(error);
    });
});

app.delete('/currencies/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid id');
    }

    db.removeDocument(Currency, id).then((currency) => {
        res.send(currency);
    }).catch(error => {
        res.status(400).send(error);
    });
});

app.patch('/currencies/:id', (req, res) => {
    let id = req.params.id;
    
    let body = _.pick(req.body, ['name', 'short_name', 'sign']);
    console.log('body: ', JSON.stringify(body, undefined, 2));
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid id');
    }

    db.updateDocument(Currency, id, body).then((currency) => {
        res.send(currency);
    }).catch(error => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log(`Webserver started on port ${port}`);
})

module.exports = {
    app
};


