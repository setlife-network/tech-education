const Sequelize = require('sequelize');

const sequelize = new Sequelize(MYSQL_DB_NAME, MYSQL_DB_USERNAME, MYSQL_DB_PASSWORD, {

    host: MYSQL_DB_HOST,
    dialect: 'mysql',
    port: 3306,
    logging: function () { },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },
    charset: 'utf8',
    collate: 'utf8_unicode_ci', 
});

const db = {
    sequelize,
    Sequelize,
    models: {
        User,
        Topic,
        Language,
        Feedback,
        Course,
        
    },
};

db.models.User = require('./models/user.js')(sequelize);
db.models.Topic = require('./models/topic.js')(sequelize);
db.models.Course = require('./models/course.js')(sequelize);
db.models.Language= require('./models/language.js')(sequelize);
db.models.Feedback = require('./models/feedback.js')(sequelize);

module.exports = db;