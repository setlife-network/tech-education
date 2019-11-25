const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Feedback extends Sequelize.Model {}
    Feedback.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },
        text: {
            type: Sequelize.STRING(550),
            allowNull: true,

        },
        
        date_created: {
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 

        },
        adapter_direction: {
            type: Sequelize.STRING(50)
        },

    },

    // Model options object
    {
        timestamps: false,
        sequelize,

    });

    Feedback.associate = models => {
        Feedback.belongsTo(models.User);
        Feedback.belongsTo(models.Topic);
    };
   

    return Feedback;
};