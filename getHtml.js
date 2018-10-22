const fs = require('fs');

module.exports.getIndexHtml = (req, res, payload, cb) => {
    fs.readFile('./public/index.html', (err, data) => {
        if (err) cb( { code: 500, message: 'Error read file \'index.html\'' } );
        cb(null, data, 'text/html');
    });
}

module.exports.getFormHtml = (req, res, payload, cb) => {
    fs.readFile('./public/form.html', (err, data) => {
        if (err) cb( { code: 500, message: 'Error read file \'form.html\'' } );
        cb(null, data, 'text/html');
    });
}