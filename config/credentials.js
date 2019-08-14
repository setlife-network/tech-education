require('dotenv').config()

module.exports = {
    // MYSQL Access Keys
    MYSQL: {
        DB_HOST: process.env.MYSQL_DB_HOST,
        DB_USERNAME: process.env.MYSQL_DB_USERNAME,
        DB_PASSWORD: process.env.MYSQL_DB_PASSWORD,
        DB_NAME: process.env.MYSQL_DB_NAME,
        
    },
    //SENDGRID Key
    SENDGRID: {
        API_KEY: process.env.SENDGRID_API_KEY,
    },

    AIRTABLE: {
        API_KEY: process.env.AIRTABLE_API_KEY,
        BASE_ID: process.env.AIRTABLE_BASE_ID
    },
};