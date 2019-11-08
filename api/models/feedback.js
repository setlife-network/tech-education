const Sequelize = require ('sequelize');

module.exports =(sequelize) =>{
    class Feedback extends Sequelize.Model{}
    Feedback.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },
        text:{
            type: Sequelize.STRING(550),
            allowNull: true,

        },
        
        date_created:{
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 

        },
        adapter_direction:{
            type: Sequelize.STRING(50)
        },

    },

    // Model options object
{
    timestamps: true,
    sequelize 

});
Feedback.associate = (models) => {
    Feedback.belongsTo(models.User, { foreignKey: 'user_id' });
};
Feedback.associate = (models) => {
    Feedback.belongsTo(models.Topic, { foreignKey: 'topic_id' });
};

return Feedback;
};