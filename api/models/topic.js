const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Topic extends Sequelize.Model {}
    Topic.init({
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
        order: {
            type: Sequelize.INTEGER,

        },
        rich_text_content: {
            type: Sequelize.TEXT('long'),
        },
        created_on: {
            type: Sequelize.DATEONLY,
        },
        course_id: {
            type: Sequelize.INTEGER,
            references: 'courses', //table's name no object name
            referencesKey: 'id',
        }


    },

    // Model options object
    {
        timestamps: false,
        sequelize 
        
    });

    Topic.associate = models => {
        Topic.belongsTo(models.Course); 
        Topic.hasMany(models.Feedback, { foreignKey: 'id' });
    };


    return Topic;
};