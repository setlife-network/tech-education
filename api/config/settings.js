module.exports = {
    // Database configuration
    // Custom config functions
    db: {
        host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: '3306',
        database: 'sas2dvcw3k2a441b',
        user: 'ya3jszaappent36v',
        timezone: 'Z',
        connectionLimit: 1000,
        password: 'make this password secure', 
        waitForConnection: true,
        queueLimit: 0,
        acquireTimeout: 100000,
        knexConfig: {
            client: 'mysql',
            connection: {
                host: 'insert rds database host', 
                port: '3306',
                database: 'main',
                user: 'admin',
                timezone: 'Z',
                connectionLimit: 1000,
                password: 'make this password secure',
                charset: 'UTF8_GENERAL_CI'
            }
        }
    },
    aws: {
        accessKeyId: 'AWS public key goes here',
        secretAccessKey: 'AWS secret goes here',
        contactRecipient: 'Email address for recieving contact form emails goes here'
    },
    forceHttps: function(req, res, next) {
        var isProduction = process.env.NODE_ENV != null;

        if (isProduction && req.get('x-forwarded-proto') == 'http') {
            res.redirect('https://setdev.io' + req.url);
        } else {
            next();
        }
    }
};
