const rp = require('request-promise');
const cheerio = require('cheerio');

let city = 'new-york-city'; //auckland //new-york-city
const options = {
    uri: `https://www.expatistan.com/cost-of-living/${city}}`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(($) => {
        /*
        $('.categoryHeader').map(function(i, elem) {
            //console.log($('th').text());
            console.log($(this).text().replace(/\[Edit\]/g, '').trim());
            $(this).children('.item-name').map(function(i, elem) {
                console.log('    ' + $(this).text().trim());
            });
        });
        */
        $('tr').map(function(i, elem) {
            console.log($(this).text().replace(/\[Edit\]/g, '').trim());
        });
    })
    .catch((error) => {
        console.log(error);
    });

