const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Course extends Sequelize.Model {}
    Course.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
   
        },
        title: {
            type: Sequelize.STRING(250),
            unique: true,
            allowNull: false,

        },
        description: {
            type: Sequelize.TEXT('long'),
            allowNull: true,

        },
        current_version: {
            type: Sequelize.STRING(10),

        },
        youtube_link: {
            type: Sequelize.STRING(550)
        },
        /* language_id: {
            type: Sequelize.INTEGER,
            references: {
                model: module.Language,
                key: 'id'
            }
        }, */

    },
   

    // Model options object
    {
        timestamps: false,
        sequelize

    });


    Course.associate = (models) => {
        Course.hasMany(models.Topic);
        Course.belongsTo(models.Language);

    }; 

    return Course;
};