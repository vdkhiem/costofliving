const {mongoose} = require('./db/mongoose');
const {MongoClient, ObjectID} = require('mongodb'); 

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
    db.saveDocument(new Currency({
        name: req.body.name,
        short_name: req.body.short_name,
        sign: req.body.sign
    })).then(currency => {
        res.send(currency);
    }, (e) => {
        res.status(400).send(e);
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

app.listen(port, () => {
    console.log(`Webserver started on port ${port}`);
})

module.exports = {
    app
};


