const Sequelize = require('sequelize');
const mysql = require('mysql');
const { MYSQL } = require('../../config/credentials');

const {
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME
} = MYSQL

const sequelize = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'mysql',
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        timestamps: false,

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

sequelize.sync({ force: true })
.then(() => {
    console.log('Tables created');
})

db = {
    sequelize,
    models: {
        User: require('./user')(sequelize),
        Topic: require('./topic')(sequelize),
        Course: require('./course')(sequelize),
        Language: require('./language')(sequelize),
        Feedback: require('./feedback')(sequelize),
    }
};

module.exports = db;