const fs = require('fs');

exports.loggerMiddleware = function(req, res, next) {
    const log = `\n[${new Date().toISOString()}] ${req.method} ${req.url}`;
    
    fs.appendFileSync('logs.txt', log, 'utf-8');

    next();
};