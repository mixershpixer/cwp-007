const fs = require('fs');

module.exports.appJS = (req, res, payload, cb) => {
    fs.readFile('./public/app.js', (err, data) => {
        if (err) cb( { code: 500, message: 'Error read file \'app.js\'' } );
        cb(null, data, 'text/javascript');
    });
}

module.exports.formJS = (req, res, payload, cb) => {
    fs.readFile('./public/form.js', (err, data) => {
        if (err) cb( { code: 500, message: 'Error read file \'form.js\'' } );
        cb(null, data, 'text/javascript');
    });
}

module.exports.index = (req, res, payload, cb) => {
    fs.readFile('./public/index.js', (err, data) => {
        if (err) cb( { code: 500, message: 'Error read file \'index.js\'' } );
        cb(null, data, 'text/javascript');
    });
}