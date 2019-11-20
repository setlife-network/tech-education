const Sequelize = require('sequelize');
const mysql = require('mysql');
const { MYSQL } = require('../../config/credentials');

//declaration enviroment variables:
var host = MYSQL.DB_HOST;
var username = MYSQL.DB_USERNAME;
var password = MYSQL.DB_PASSWORD;
var DB = MYSQL.DB_NAME;

const sequelize = new Sequelize(
    DB,
    username,
    password,
    {
        host: host,
        dialect: 'mysql',
        dialectModule: 'mysql2', // Needed to fix sequelize issues with WebPack
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        dialectOptions: {
            socketPath: '/var/run/mysqld/mysqld.sock'
        },
        charset: 'utf8',
        collate: 'utf8_unicode_ci',

    }
);

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

db.models.User = require('./user')(sequelize);
db.models.Topic = require('./topic')(sequelize);
db.models.Course = require('./course')(sequelize);
db.models.Language = require('./language')(sequelize);
db.models.Feedback = require('./feedback')(sequelize);

module.exports = {
    sequelize,
    models: {
        User: require('./user')(sequelize)
    }
};
