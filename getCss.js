const fs = require('fs');

module.exports.siteCSS = (req, res, payload, cb) => {
    fs.readFile('./public/site.css', (err, data) => {
        if (err) cb( { code: 500, message: 'Error read file \'site.css\'' } );
        cb(null, data, 'text/css');
    });
}